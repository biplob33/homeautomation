import StatusIcon from "./StatusIcon"


export default function Display_Tab(props) {
    var title = props.content
    var detail = props.detail

    return (
        <div className="container-fluid info-tab">
            <div className="row">
                <div className="col-12 ">
                    {title}
                </div>
            </div>
            <StatusIcon title = {title} detail = {detail}/>
            
        </div>
    )
}