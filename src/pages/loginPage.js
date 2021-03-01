import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from 'antd';
import {
    LoginOutlined,
    UserOutlined,
    LockOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import MainTemplate from "./template/mainTemplate";
import { loginRequest } from "../redux/auth/login";
import useInput from "../lib/useInput";

const LoginPage = () => {
    const dispatch = useDispatch();

    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    const onSubmitLogin = useCallback(() => {
        dispatch(loginRequest({ email, password }));
    }, [dispatch, email, password]);

    return (
        <>
            <MainTemplate>
                <LoginTemplate>
                    <h3 style={{ textAlign: 'center', margin: '30px' }}>
                        트위터 로그인 <LoginOutlined />
                    </h3>
                    <Form onFinish={onSubmitLogin}>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Email"
                                onChange={onChangeEmail}
                            />
                        </Form.Item>

                        <Form.Item
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                                onChange={onChangePassword}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                style={{ width: '100%', marginBottom: '10px' }}
                                type="primary"
                                htmlType="submit"
                            >
                                Log in
                            </Button>
                            Or <Link to="/register">register now!</Link>
                        </Form.Item>
                    </Form>
                </LoginTemplate>
            </MainTemplate>
        </>
    );
}

export default LoginPage;

const LoginTemplate = styled.div`
    width: 400px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;