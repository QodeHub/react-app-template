import { Button } from "Components";
import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";

const ErrorPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    max-width: 400px;
  }
`;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorPage>
          <Container>
            <div className="content mx-auto">
              <Image src="error.svg" fluid className="mb-0 d-block mb-32" />
              <p className="text-center font-size-24 font-weight-500 mb-4">
                Oops, something went wrong
              </p>

              <Button
                onClick={() => window.location.reload()}
                className="btn--default px-5 mx-auto"
                value="Home"
                isValid
              />
            </div>
          </Container>
        </ErrorPage>
      );
    }

    return this.props.children;
  }
}
