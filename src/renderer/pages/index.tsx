import React, { useState, useEffect } from 'react';
import icon from '../../../assets/icon.svg';
import {io} from 'socket.io-client';
import {
  Button,
  Form,
  Input,
} from 'antd'

import './index.css';



const Index: React.FC<any> = (props) => {
  const [form] = Form.useForm()

  const [messages, setMessage] = useState<any>([])
  const [connect,setConnect] = useState<boolean>(false);
  const [sockets, setSockets] = useState<any>()
  useEffect(() => {
    const socket = io("http://192.168.31.85:8082")
    setSockets(socket)
    socket.open();
    console.log('socket',socket)
    socket.on('connect', () => {
      setConnect(socket.connected)
    })
    // if(!connect){
    //   socket.close()
    // }
    return () => {
      socket.close()
      // clearEffect
    };
  }, []);
  useEffect(() => {
    // content: ;
    if(connect){
      getMsg();
    }

    return () => {
      // clearEffect
    };
  });
// 接收
const getMsg = () => {
  sockets.on("gbmsg", (data:any) => {
    setMessage((msg: any) => [...msg,data])
  })
}

const onFinish = (values:any) => {
  console.log("values",values)
  console.log(connect)
  if(values?.message){
    form.setFieldValue("message",null)
    sockets.emit('message',values?.message)
  }

}


  return (
    <div>
      <div className="Hello">
        {
          (messages || []).map((item: any) => (
            <p key={item}>{item}</p>
          ))
        }
      </div>
      <Form
      form={form}
      onFinish={onFinish}>
        <Form.Item
          label=""
          name="message"
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            发送
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Index;

