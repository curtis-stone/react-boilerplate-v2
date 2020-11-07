import React from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { Link } from 'react-router-dom';
import document from "./docs/document.pdf";

export default class PDF extends React.Component {
  render() {
    return (
        <div>
        <Link to="/images/strength.pdf" target="_blank">Download</Link>
      </div>
    );
  }
}
// const MyDoc = () => (
//   <Document>
//     <Page>
//      // My document data
//     </Page>
//   </Document>
// );

// const PDF = () => (
//   <div>
//     <PDFDownloadLink document={<MyDoc />} fileName="document.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? "Loading document..." : "Download now!"
//       }
//     </PDFDownloadLink>
//   </div>
// );

// export default PDF;