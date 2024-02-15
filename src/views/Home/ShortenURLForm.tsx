// formik and yup
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
// baseUI
import { Button, KIND } from "baseui/button";
// components
import notify from "components/notification/Notification";
import TextField from "components/form/TextField";
// utils
import http from "utils/http";
import { SHORTEN_URL } from "utils/apiEndpoints";

type Props = {
  refresh: () => void;
};

type FormProps = {
  url: string;
};

export default function ShortenURLForm({ refresh }: Props) {
  const initialValues: FormProps = {
    url: "",
  };

  const ValidationSchema = Yup.object().shape({
    url: Yup.string().required("URL is required").url("Invalid URL"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await http.post(SHORTEN_URL, {
          ...values,
        });

        const { id, url } = response;
        const shortedUrlListJson =
          localStorage.getItem("shortenUrlList") || "[]";
        const shortedUrlList = JSON.parse(shortedUrlListJson);
        shortedUrlList.push({ id, url });
        localStorage.setItem("shortenUrlList", JSON.stringify(shortedUrlList));

        refresh();

        notify({
          text: "URL Shortened successfully",
          notificationType: "success",
        });
        resetForm();
      } catch (error) {
        setSubmitting(false);
        console.log(error);
        notify({ text: JSON.stringify(error), notificationType: "error" });
      }
    },
  });

  const {
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    resetForm,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4">
            <TextField
              {...getFieldProps("url")}
              placeholder="Enter URL"
              isError={Boolean(touched.url && errors.url)}
              helperText={errors.url}
            />
          </div>
          <div>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full"
              kind={KIND.primary}
            >
              Shorten URL
            </Button>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
}
