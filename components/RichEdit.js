import styled from 'styled-components';

const RichEdit = styled.div`
line-height: 1.5em;

img {
  height: 100%;
}
strong {}
blockquote {
  box-shadow: #c5d2d8 3px 0px 0px 0px inset;
  padding-left: 23px;
  font-style: italic;
  margin: 2em 0;
}
code {
  font-size: 0.875em;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro",
    monospace;
  border-radius: 3px;
  background: rgba(250, 166, 166, 0.3);
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-top: 66.67%;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;

export default RichEdit;
