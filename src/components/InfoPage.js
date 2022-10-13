import React from "react";
import Constants, {userToken} from "src/Constants";
import 'bootstrap/dist/css/bootstrap.min.css';
const InfoPage = () => {

    const [content, setContent] = React.useState('');

    React.useEffect(() => {
        let url = Constants.howItWorksContent;


        (async () => {
            let response = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': userToken(),

                }
            })
            let data = await response.json();
            console.log(data);
            if(data.status === 200){
                setContent(data?.data?.content);
            }
        })()
    }, [])

    return (
        <div className="container">
        <div className="row">
          <div className="col-12 content-paging">
            <h1 className="text-center">How It Works</h1>
          </div>
          <div className="col-12 content__container" dangerouslySetInnerHTML={{__html: content}} />
          </div>
      </div>
      );
}

export default InfoPage;