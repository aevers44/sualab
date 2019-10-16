import React from 'react';
import {cross} from 'react-icons-kit/icomoon/cross';
import Icon from 'react-icons-kit';
import styles from "./popup.scss";


const setCookie = (name, value, exp) => {
    const date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

class NewPopup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            show: false
        }
        this.onDoNotShowToday = this.onDoNotShowToday.bind(this);
        this.onClosePopup = this.onClosePopup.bind(this);
		this.onClickPopup = this.onClickPopup.bind(this);
    }

    componentWillMount(){
        const checkedCookie = getCookie(`popup:${this.props.popupId}`);
        if (checkedCookie === null){
            this.setState({
                show: true
            })
        }
    }
    
    onDoNotShowToday(e){
        this.setState({
            checked: e.target.checked
        })
    }

    onClosePopup(){
        if(this.state.checked){
            // setCookie 
            setCookie(`popup:${this.props.popupId}`, "on", 1);
        }

        this.setState({
            show: false
        })
    }
	
	onClickPopup(){
		
		window.open(`${this.props.url}`, "_blank");
	}

    render() { 
        const {image, width, height, url, lang} = this.props;
		var linkBoxStyle = styles.linkBoxStyle_ko;
		
		if(`${lang}` == "en")
			linkBoxStyle = styles.linkBoxStyle_en;
		
        const divStyle = { 
            height,
            width,
            backgroundImage: `url(${image})`,
        }
    
        return (
            this.state.show ? 
            <div className={styles.popupWrapper} style={divStyle}>
				<a className={linkBoxStyle} href={url} target="_blank" >
				</a>
                <div className={styles.checkboxStyle}>
                    <input type="checkbox" onChange={this.onDoNotShowToday}/>
                    <label>오늘 하루 더이상 보지 않겠습니다</label>
                    <div className={styles.closeBtn} onClick={this.onClosePopup}>
                        <Icon icon={cross}/>
                    </div>
                </div>
            </div> : <div></div>
        )
    }
}


export default NewPopup;