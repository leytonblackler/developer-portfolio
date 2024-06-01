import { type FunctionComponent } from "react";
import { ErrorPageLayout } from "@/components/pages/error/layout";
import { GlitchText } from "@/components/pages/not-found/glitch-text";

const NotFoundPage: FunctionComponent = () => (
  <ErrorPageLayout>
    <GlitchText>404</GlitchText>
  </ErrorPageLayout>
);

export default NotFoundPage;
