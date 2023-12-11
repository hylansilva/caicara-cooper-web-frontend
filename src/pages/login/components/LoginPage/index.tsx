import { Button, Checkbox, Form, Input } from 'antd'
import * as S from './styles'

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

export const LogInPage: React.FC = () => {
    return (
        <S.Section>
            <Form
                name="basic"
                style={{width: '10vw'}}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Seu email é requerido' }]}
                >
                    <Input type='email' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="senha"
                    name="password"
                    rules={[{ required: true, message: 'Sua senha é requerida' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Lembra de mim ?</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </S.Section>
    )
}