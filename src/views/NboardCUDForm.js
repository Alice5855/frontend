import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import axios from "axios";

class NboardCUDForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            btitle: "",
            btext: "",
            
            crud: props.match.params.crud,
        };
        if (this.state.crud !== "Insert") {
            this.getData();
        }
    }
    /*
    props에 VO에 저장된 column명으로 data를 저장할 수 있도록 함
    crud: 각각의 기능을 'view','update','delete','insert'로 구분
    하여 기능 정의 된 data를 Header로 넘김으로서 아래에서 data를
    axios로(ajax와 비슷한것) 넘기거나 form 값을 insert하기 위해 
    정의됨
    Insert의 경우 현재 form에 입력된 값을 data로 저장해 axios로
    값을 백으로 넘기게 됨
    */

    createHeaderName() {
        const crud = this.state.crud;
        if (crud === "View") {
            return "조회";
        } else if (crud === "Update") {
            return "수정";
        } else if (crud === "Delete") {
            return "삭제";
        } else if (crud === "Insert") {
            return "등록";
        }
    }
    // ViewButton.js에서 Link될 때 mapping된 url에 따라 기능이 구분되어
    // Header에 기능을 정의하는 부분

    createCrudBtn() {
        const crud = this.state.crud;
        if (crud === "View") {
            return null;
        } else {
            const crudName =
            crud === "Update" ? "수정" : crud === "Insert" ? "등록" : "삭제";
            return (
            <button onClick={() => this.crud()}>게시글 {crudName}</button>
            );
        }
    }
    // 기능정의되어 넘어온 crud값을 통해 button text와 onClick 링크를
    // 버튼에 mapping 해줌. view의 경우 이미 data가 넘어온 상태일 것이므로
    // btn에 기능정의를 따로 하지 않음

    crud() {
        const {bnum, btitle, btext, crud, bwriter,bregdate } = this.state;
        let crudType = "";

        if (crud === "Update") {
            crudType = "/modify.do";
        } else if (crud === "Delete") {
            crudType = "/delete.do";
        } else if (crud === "Insert") {
            crudType = "/insertProcess.do";
        } else if (crud === "View") {
            return null;
        }
        // crud에 정의된 기능에 따라 controller의 기능으로 url을 넘겨줌
        // 이 때 넘길 값들은 props에 저장되는 각각의 column값에 맞춘
        // 값들 (const {}부분)이 된다.

        let form = new FormData();
        form.append("Btext", btext);
        form.append("Btitle", btitle);
        form.append("Bwriter", bwriter);
        
        if (crud !== "Insert") {
            form.append("BNum", bnum);
        }
        console.log();
        // form에 입력된 data를 props에 저장하는 부분. Insert가 아닌
        // 경우 백에서 넘어온 articleID를 사용해야 하므로 if(!==)문을
        // 사용함

        axios
            .post(crudType, form)
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                this.props.history.push("/");
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            }
        );
            
        // axios의 post method로 props의 data(crudType, form)를 넘기고
        // 성공했을 때(.then) .push('/')로 메인 페이지로 forward해주고
        // 실패했을 때(.catch) error message를 alert
    }

    getData() {
        axios.get("/view.do").then((res) => {
            const data = res.data;
            this.setState({
                bnum: data.bnum,
                btitle: data.btitle,
                btext: data.btext,
            });
        });
    }
    // view에서 넘어올 때에는 controller에서 넘어온 data를 props에 붙여
    // 출력할 수 있도록 함

    createArticleIdTag() {
        const bnum = this.state.bnum;
        const crud = this.state.crud;
        if (crud !== "Insert") {
            return <input type="hidden" value={bnum} readOnly />;
        } else {
            return null;
        }
    }


    render(){
        const btitle = this.state.btitle;
        const btext = this.state.btext;
        const bwriter = this.state.bwriter;
        return(
            <div className="container-fluid px-5 my-5">
                <Card className="px-5 py-5 d-flex formBody">
                    <h1>게시글 {this.createHeaderName()}</h1>
                    <h3>제목</h3>
                    <input
                        type="text"
                        name={btitle}
                        value={btitle}
                        onChange={(event) =>{
                            
                            this.setState({ btitle: event.target.value })
                        }
                            
                        }
                        className='my-3 form-control inputTitle'
                />
                    <h3>내용</h3>
                    <textarea
                        rows="10"
                        cols="20"
                        name={btext}
                        value={btext}
                        className="my-3 form-control inputText"
                        style={{resize: 'none'}}
                        onChange={(event) =>
                            this.setState({ btext: event.target.value })
                    }
                ></textarea>
                    
                    <h3>글쓴이</h3>
                    <input
                        type="text"
                        name={bwriter}
                        value={bwriter}
                        className="my-3 form-control inputRegdate"
                        onChange={(event) =>{
                            this.setState({ bwriter: event.target.value })
                    }
                        
                    }
                />
                        <div className="float-end">
                            {this.createCrudBtn()}
                        </div>
                    
                </Card>
                <div className="mt-5">
                    <Link to={"/Notice"}>
                        <Button className="btn-info float-end">
                            리스트
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}



export default NboardCUDForm;