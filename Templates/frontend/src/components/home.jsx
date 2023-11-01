import { useEffect, useState } from "react"
import axios from "axios";

import Display_Tab from "./Display_Tab"

export default function Home() {
    const [tabs, update_tabs] = useState([])
    const [details, update_details] = useState([])

    useEffect(() => {
        axios.get(window.backend_url + 'get_details')
            .then(data => {
                if (data.data) {
                    update_tabs(() => data.data['tabs'])
                    update_details(() => data.data['details'])
                }

            }).catch(error => console.log(error))

    }, [])
    return <>
        <div className="container">
            <div className="row">
                {tabs.map((tab, indx) => {
                    return <div className="col-6 col-lg-4" key={tab}>
                        <Display_Tab content={tab} detail={details[indx]} />
                    </div>
                })}

            </div>
        </div>

    </>
}