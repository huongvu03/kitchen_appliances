import { useParams } from "react-router-dom";
import FileViewer from 'react-file-viewer'

function ManualDetail({products}) {
    const { id } = useParams();
    console.log(id);

     const product = products.find(item => item.id == parseInt(id));
    console.log(products);
    console.log(product.manual);
    return (
        <div className="blogdetail_page container">


            <div className="blogdetail_title">
                {/* <object width="100%"
                    height="700px"
                    data="./file/blenders.pdf"
                  
                    type="application/pdf"
                >
                    File Load Fails!
                </object> */}
                <FileViewer
        fileType='pdf'
        filePath={product.manual}
/>
               


            </div>
        </div>



    );
}

         
           
  
export default ManualDetail;