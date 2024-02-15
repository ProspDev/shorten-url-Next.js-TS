import { Input, InputProps } from "baseui/input";
import ParagraghError from "components/typography/PragraphError";

type IProps = {
  isError: boolean;
  helperText: string | undefined;
};

type Props = IProps & InputProps;

export default function TextField({ isError, helperText, ...others }: Props) {
  return (
    <>
      <Input
        rows={5}
        {...others}
        autoComplete="off"
        clearable
        error={isError}
        positive={!isError && Boolean(others.value)}
        overrides={{
          Root: {
            style: {
              borderRadius: 0,
            },
          },
        }}
      />
      {isError && <ParagraghError text={helperText || ""} />}
    </>
  );
}
