import { Collapse } from "antd";
import styled from "styled-components";

export const StyledCollapse = styled(Collapse)`
  &&& {
    border-radius: 10px;
    box-shadow: 2px 2px 20px #2e3934;
    color: white;
    
  }
  .ant-collapse-content {
    background: #20503a;
    color: white;
  }

  .ant-collapse-content {
    font-size: 15px;
    color: white;
  }

  .ant-collapse-header {
    font-size: 17px;
    color: white !important;
  }
`;