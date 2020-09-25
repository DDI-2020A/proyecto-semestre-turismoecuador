import React, {useState, useEffect} from "react";
import {Row, Col, Card, Modal, Button, Form, Tooltip, Input, Comment, Avatar, Carousel, message } from 'antd';
import FIREBASE from '../Firebase'
import '../Styles/Forum.css';
import moment from 'moment';

const { TextArea } = Input;

const ForumInformation = ({province, nameProvince}) => {
     
    const [ capital, setCapital ] = useState(null);
    const [ food, setFood ] = useState(null);
    const [ description, setDescription ] = useState(null);               
    const [ dataSource, setDataSource ] = useState(null);
    const [ dataComment, setDataComment ] = useState( );
    const [ dataUser, setDataUser ] = useState( null);
    const [loged, setLoged] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ activities, setActivities ] = useState(null);
    const [ image1Name, setImage1Name ] = useState(null);
    const [ image2Name, setImage2Name ] = useState(null);
    const [ image3Name, setImage3Name ] = useState(null);
    const [ image4Name, setImage4Name ] = useState(null);
    const [ image1Photo, setImage1Photo ] = useState(null);
    const [ image2Photo, setImage2Photo ] = useState(null);
    const [ image3Photo, setImage3Photo ] = useState(null);
    const [ image4Photo, setImage4Photo ] = useState(null);

    //---------------------------------------------------------------

    class App1 extends React.Component {
        state = { visible: false };
      
        showModal = () => {
          this.setState({ visible: true, });
          
            isLoading === true || loged === true
            ?
                message.success('Bienvenido :)') 
            :
                message.success('Bienvenido :) Para agregar comentarios es necesario que ingrese sesión o se registre!!')
            
        };
      
        handleOk = e => {
          console.log(e);
          this.setState({ visible: false,});
        };
      
        handleCancel = e => {
          console.log(e);
          this.setState({ visible: false, });
        };

        render() {
            return (
              <>
                <Button  key = {'1'} type="primary" onClick={this.showModal}>Comentarios</Button>
                <Modal
                  title='Lista de comentarios'  
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  className = 'titleInsular'
                  key = {'2'}
                >
                  <div key = {'3'}>
                        <Card key = {'4'} className= 'titleInsular' bordered={true} align="left">
                        {
                                dataComment.map((comment, index) => {
                                    return (
                                        <Comment
                                            key = {index}
                                            author={
                                                <>
                                                <h3>{ comment.userName } </h3>
                                                <h3>{ comment.email } </h3>
                                                </>
                                            }
                                            avatar={
                                                <Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                alt="usuario"
                                                key = {'5'}
                                                />
                                            }    
                                            content={
                                                <p key = {'6'} >{comment.comment}</p>
                                            }
                                            datetime={
                                                <Tooltip key = {'7'} title={moment()
                                                    .format('YYYY/MM/DD -- HH:mm:ss')}>
                                                    <h6 key = {'8'} >{comment.date}</h6>
                                                </Tooltip>
                                            }
                                        />
                                    );
                                })
                            }
                        </Card>

                            <Form 
                                key = {'10'}
                                name='comment-form'
                                onFinish={ 
                                    isLoading === true
                                    ?
                                    addComment
                                    :
                                    ''
                                    }
                            >
                            <Form.Item key = {'11'}
                                label='Ingresar comentario'
                                name={['comment']}
                                rules={ [
                                {
                                    required: true,
                                    message: 'Ingresa un texto en el comentario'
                                }
                                ] }>
                                <TextArea key = {'12'} rows={ 4 } />
                                </Form.Item>
                                <Form.Item key = {'13'}>
                                    <Button key = {'14'} htmlType='submit' type='primary' style={ { marginTop: 15 } }>
                                        Agregar Comentario
                                    </Button>
                                </Form.Item>
                            </Form>
                    </div>
                </Modal>
              </>
            );
          }
        }
    //---------------------------------------------------------------

    // -------- CardStyles --------
    
    const StyleCardPrincipal = { 
        borderRadius: '16px', 
        marginRight: '2%',
        marginLeft: '2%', 
        backgroundColor: '#E5E5E5' 
      }
  
      const StyleCard = { 
        borderRadius: '16px', 
        marginRight: '5%',
        marginLeft: '5%', 
        boxShadow: '-10px -10px #F68860',
        backgroundColor: '#FAC3AF',
        borderColor: '#FAC3AF'
      }
    
    useEffect( () => {
        const getProvince = async() => {
            await FIREBASE.db.ref(`regions/Insular/provinces/${province}`).on('value', (snapshot) => {
                let data = [];
                    const region = snapshot.val();
                    setDataSource(data);
                    console.log('dataSource', region)
                    setActivities(region.activities);
                    setCapital(region.capital);
                    setFood(region.food);
                    setDescription(region.description);
                    setImage1Name(region.images.image1.namePlace);
                    setImage2Name(region.images.image2.namePlace);
                    setImage3Name(region.images.image3.namePlace);
                    setImage4Name(region.images.image4.namePlace);
                    setImage1Photo(region.images.image1.photoPlace);
                    setImage2Photo(region.images.image2.photoPlace);
                    setImage3Photo(region.images.image3.photoPlace);
                    setImage4Photo(region.images.image4.photoPlace);
                    console.log('nameProvince' ,nameProvince)
                  } );
          };
          getProvince();
          console.log('dataFinal', dataSource)

        const getComments = async() => {
            FIREBASE.db.ref( `regions/Insular/provinces/${province}/comments` ).on( 'value', ( snapshot ) => {
              const dataComment = [];
              snapshot.forEach( ( data ) => {
                const comment = data.val();
                const commentId = data.key;
                dataComment.push( {
                  key: commentId,
                  comment: comment.comment,
                  date: comment.date,
                  email: comment.email,
                  userName: comment.userName
                } );
              } );
              setDataComment(dataComment);
              console.log('dataComment', dataComment)
            } );
          };
          getComments();
        
          //-----------------------------------------------------------------------------------------------

          FIREBASE.auth.onAuthStateChanged(async (user) => {
            if (user) {
                let uid = user.uid;
                await FIREBASE.db.ref(`users/${uid}`).on('value', (snapshot) => {
                    const user = snapshot.val();
                    console.log('userData:', user);
                    setDataUser(user);
                    setCurrentUser(uid);
                    setLoged(true)
                    setIsLoading(true);
                });

            } else {
                // User is signed out.
                console.log('user loggedOut');
                setLoged(false);
            }

        });

        return () => {
            console.log('UNSUBSCRIBE');
            FIREBASE.db.ref(`users/${currentUser}`).off();
            FIREBASE.db.ref(`regions/Insular/provinces/${province}`).off();
            FIREBASE.db.ref(`regions/Insular/provinces/${province}/comments`).off();
        };
      }, []);
      
        const addComment = async ( values ) => {
            const today = new Date();
            const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            await FIREBASE.db.ref(`regions/Insular/provinces/${province}/comments`).push({
                comment: values.comment,
                date: date,
                email: dataUser.email,
                userName: dataUser.firstName
            });
        };  
    return  (
        <>
            {
                dataSource
                    ?
                        <>
                            <Row key = {'15'} gutter={16} justify="end">
                                <Col key = {'16'} span={3}>
                                    <App1 key = {'17'} />
                                </Col>
                                <Col key = {'18'} span = {24}>
                                    <h3 key = {'19'} className = "titleInsular">{nameProvince}</h3>
                                </Col>
                            </Row>
                            
                            <Carousel autoplay key = {'20'}>
                                <div key = {'21'}>
                                    <Card key = {'22'} title={ image1Name } bordered={false} style={ StyleCardPrincipal }>
                                        <img key = {'23'} className="contentStyle" alt="exampleImage" src={ image1Photo }/>
                                    </Card>
                                </div>
                                <div key = {'24'}>
                                    <Card key = {'25'} title={ image2Name } bordered={false} style={ StyleCardPrincipal }>
                                        <img key = {'26'} className="contentStyle" alt="exampleImage" src={ image2Photo }/>
                                    </Card>
                                </div>
                                <div key = {'27'}>
                                    <Card key = {'28'} title={ image3Name } bordered={false} style={ StyleCardPrincipal }>
                                        <img key = {'29'} className="contentStyle" alt="exampleImage" src={ image3Photo }/>
                                    </Card>
                                </div>
                                <div key = {'30'}>
                                    <Card key = {'31'} title={ image4Name } bordered={false} style={ StyleCardPrincipal }>
                                        <img key = {'32'} className="contentStyle" alt="exampleImage" src={ image4Photo }/>
                                    </Card>
                                </div>
                            </Carousel>
                                <div  key = {'33'}>
                                    <br key = {'34'} />
                                    <Row key = {'35'} gutter={16}>
                                        <Col key = {'36'} span={12}>
                                            <Card key = {'37'} title="Región" bordered={true} style={ StyleCard }>
                                                Insular
                                            </Card>
                                        </Col>
                                        <Col key = {'38'} span={12}>
                                            <Card key = {'39'} title="Capital" bordered={true} style={ StyleCard }>
                                                { capital }
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br key = {'40'}/>
                                    <Row key = {'41'} gutter={16}>
                                        <Col key = {'42'} span={12}>
                                            <Card key = {'43'} title="Actividades" bordered={true} style={ StyleCard }>
                                                { activities }
                                            </Card>
                                        </Col>
                                        <Col key = {'44'} span={12}>
                                            <Card key = {'45'} title="Comida típica" bordered={true} style={ StyleCard }>
                                                { food }
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br key = {'46'}/>
                                    <Row key = {'47'} gutter={16}>
                                        <Col key = {'48'} span={24}>
                                            <Card key = {'49'} title="Descripción" bordered={true} style={ StyleCard }>
                                                { description }
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>  
                            </>                    
                     : '...cargando'
                     }
        </>
    );
};
export default ForumInformation;