import './App.scss';
import { useState } from 'react';

import { Row, Col, Layout, Button } from 'antd';
import { } from '@ant-design/icons';

const { Content, Sider } = Layout;


function App() {
  let [toggle, toggleSet] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Sider width={400} breakpoint="md" collapsedWidth={0}> */}
        {/* <Sider width={400} collapsible collapsed={toggle}> */}
        <Sider collapsed={false} onCollapse={false}>

        </Sider>
        <Layout>
          <Content>
            <Row justify="center">
              <Col span={24} sm={6} className="test-col">
                Col1
              </Col>
              <Col span={24} sm={6} className="test-col">
                Col2
              </Col>
              <Col span={24} sm={6} className="test-col">
                Col3
              </Col>
            </Row>
            <Button type="danger" onClick={() => { toggleSet(!toggle) }}>button</Button>
          </Content>
        </Layout>
      </Layout>
    </div >
  );
}

export default App;
