import { React, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  Space,
} from "antd";
import Navbar from "../components/navbar/Navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Metamask from "../components/metamask";
import { Footer } from "../components/Footer";

const dashboard = () => {
  const [modalseller, setModalSeller] = useState(false);
  const [modalbuyer, setModalBuyer] = useState(false);
  const [modalinstpector, setModalInspector] = useState(false);

  function OTPalert(params) {
    alert('OTP will be send to your Registred Mobile');    
  }
  const onFinishseller = (values) => {
    console.log("Success:", values);
    alert(`Adhar Card ${values} Sucessfull Verified!!`)
    window.location = "/form";
  };
  const onFinishFailedseller = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const onFinishbuyer = (values) => {
    console.log("Success:", values);
    alert(`Adhar Card ${values} Sucessfull Verified!!`)
    window.location = "/lands";
  };
  const onFinishFailedbuyer = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishinspector = (values) => {
    console.log("Success:", values);
    if (values.username=='admin' && values.password=='admin') {
    window.location = "/inspectordashboard";
    }
    else{
      alert('Invalid Credentials');
    }
    
  };
  const onFinishFailedinspector = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-gray-100 max-h-screen" >
      <Navbar />
      <Row gutter={16} className="justify-center py-64">
        <Col
          span={6}
          onClick={() => setModalSeller(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        >
          <Card title="Seller Login" bordered={false}>
            <ul>
              <li>Metamask Connection</li>
              <li>Add Land</li>
              <li>Update Land</li>
              <li>Remove Land</li>
            </ul>
          </Card>
        </Col>
        <Col
          span={6}
          onClick={() => setModalBuyer(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <Card title="Buyer Login" bordered={false}>
            <ul>
              <li>Metamask Connection</li>
              <li>Buy Land</li>
              <li>Request Document</li>
              <li>Transaction</li>
            </ul>
          </Card>
        </Col>
        <Col
          span={6}
          onClick={() => setModalInspector(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <Card title="Land Inspector" bordered={false}>
            <ul>
              <li>Register Using unique Id</li>
              <li>Verify Land</li>
              <li>Update Land</li>
              <li>Transfer Ownership</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Modal
        title="Seller Login"
        centered
        footer={null}
        open={modalseller}
        onOk={() => setModalSeller(false)}
        onCancel={() => setModalSeller(false)}
      >
        {!(<Metamask />) ? (
          <>
            <p> Connect Wallet </p>
            <br />
            <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Wallet Connect
            </button>
          </>
        ) : (
          <>
            <p>Wallet Connected </p>
            <button className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              {<Metamask />}
            </button>
          </>
        )}

        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinishseller}
          onFinishFailed={onFinishFailedseller}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input placeholder="xxxx xxxx xxxx xxxx" />
          </Form.Item>

          <Form.Item label="OTP">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the OTP you got!",
                    },
                  ]}
                >
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Button onClick={OTPalert}>Get otp</Button>

              </Col>
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
              >
                Login
              </button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Buyer Login"
        centered
        footer={null}
        open={modalbuyer}
        onOk={() => setModalBuyer(false)}
        onCancel={() => setModalBuyer(false)}
      >
          {!(<Metamask />) ? (
          <>
            <p> Connect Wallet </p>
            <br />
            <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Wallet Connect
            </button>
          </>
        ) : (
          <>
            <p>Wallet Connected </p>
            <button className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              {<Metamask />}
            </button>
          </>
        )}

        <Form
          layout="vertical"
          name="basic"
          action="/lands"
          onFinish={onFinishbuyer}
          onFinishFailed={onFinishFailedbuyer}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
        <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input placeholder="xxxx xxxx xxxx xxxx" />
          </Form.Item>

          <Form.Item label="OTP" >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the OTP you got!",
                    },
                  ]}
                >
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button onClick={OTPalert}>Get otp</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
              >
                Login
              </button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Buyer Login"
        centered
        footer={null}
        open={modalinstpector}
        onOk={() => setModalInspector(false)}
        onCancel={() => setModalInspector(false)}
      >
      

        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinishinspector}
          onFinishFailed={onFinishFailedinspector}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot text-blue-600" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Form.Item wrapperCol={{}}>
              <Space
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
                >
                  Login
                </button>
              </Space>
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
      <Footer/>
      </div>
  );
};

export default dashboard;
