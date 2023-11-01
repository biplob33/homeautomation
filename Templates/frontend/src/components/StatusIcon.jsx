import { useEffect, useState } from 'react'
import '../icon.css'
export default function StatusIcon(props) {
    var detail = props.detail
    var title = props.title
    const [display_text, update_text] = useState('')
    const [icon, update_icon] = useState(null)


    useEffect(() => {
        if (title === 'Battery') {
            var extra_cls_name = ''
            if (detail['Percentage'] < 18)
                extra_cls_name = 'warn'

            var icon_local = <>
                <div className="battery">
                    <div className={"battery-level " + extra_cls_name} style={{ "height": detail['Percentage'] + "%" }}></div>
                </div>
            </>
            var text_local = detail['Percentage'] + '%'
        }
        else if (title === 'Solar') {
            var extra_cls_name = ''
            if (detail['State'] == 0)
                extra_cls_name = 'solar-off'
            else
                extra_cls_name = 'solar-on'

            var icon_local = <>
                <div className={extra_cls_name}>
                </div>
                <div className="solar ">
                    <div className="panel top-ver-line"></div>
                    <div className="panel bottom-ver-line"></div>
                    <div className="panel top-hor-line" ></div>
                    <div className="panel bottom-hor-line"></div>
                </div>
            </>
            var text_local = detail['State'] === 1 ? 'ON' : 'OFF'
        }
        else if (title === 'Water') {
            var extra_cls_name = ''
            if (detail['level'] == 0)
                extra_cls_name = 'warn'
            else
                extra_cls_name = 'alert'

            var icon_local = <>
                <div className="tank">
                    <div className='water-level' style={{ "height": detail['Percentage'] + '%', }}></div>
                </div>
            </>
            var text_local = detail['Percentage'] + '%'
        }
        update_icon(() => icon_local)
        update_text(() => text_local)
    }, [detail])
    return <>
        <div className='row'>
            <div className='col-6'>
                {icon}
            </div>
            <div className='col-6 status-level'>
                {display_text}
            </div>
        </div>
        <div className='row'>

            {Object.keys(detail).map((key, indx) => {
                return <>
                    <div className='col-12'>
                        {key} : {detail[key]}
                    </div>
                </>
            })}

        </div>
    </>
}