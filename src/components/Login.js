import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

const handleLogin = (e) => {
    e.preventDefault();
    console.log('Preventing the default action');
    window.location.href = "/api/login";
};

const Login = () => {
    return (
        <>
            <Col>
                <Card className="border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-muted text-center mt-2 mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div className="btn-wrapper text-center">
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="/api/github"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={
                                            require("../assets/img/icons/common/github.svg")
                                                .default
                                        }
                                    />
                                </span>
                                <span className="btn-inner--text">Github</span>
                            </Button>
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="/api/login"
                                onClick={handleLogin}
                            >
                                <span className="btn-inner--icon">
                                    <img
                                        alt="..."
                                        src={
                                            require("../assets/img/icons/common/google.svg")
                                                .default
                                        }
                                    />
                                </span>
                                <span className="btn-inner--text">Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    autoComplete="new-email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </FormGroup>
                            <Row className="mt-3"></Row>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className="text-muted">&nbsp;Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                        <Button
                            aria-pressed={true}
                            className="active"
                            color="secondary"
                            href="/login"
                            //onClick={e => e.preventDefault()}
                            role="button"
                            size="md">Forgot password?
                        </Button>
                    </Col>
                    <Col className="text-right" xs="6">
                        <Button
                            aria-pressed={true}
                            className="active"
                            color="primary"
                            href="/register"
                            //onClick={e => e.preventDefault()}
                            role="button"
                            size="md">Create account
                        </Button>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Login;
