/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Container, Header, Content, Footer, Item, Input, Left, Icon, Body,
          List,ListItem,Thumbnail,Text, Card, CardItem, Button, Right,
          Form, Label, View} from 'native-base';
import { Grid, Col, Row} from 'react-native-easy-grid';

class App extends Component{
  constructor(){ 
    super(); 
    this.state = {berat: 0, tinggi: 0, massa:0, diagnosa:"", printText:false}; 
  }

  calculate()
  {
    let hberat = this.state.berat;
    let htinggi = this.state.tinggi/100;
    let IMT = (Number(hberat) / Math.pow(Number(htinggi),2));
    this.setState({massa: IMT});
    if(IMT<18.5){
      this.setState({diagnosa:'Berat Badan Kurang'})
    }
    else if(IMT>=18.5 && IMT<24.9){
      this.setState({diagnosa:'Berat Badan Ideal'})
    }
    else if(IMT>25.0 && IMT<29.9){
      this.setState({diagnosa:'BB Berlebih'})
    }
    else if(IMT>30 && IMT<39.9){
      this.setState({diagnosa:'BB Sangat Berlebih'})
    }
    else if(IMT>=39.9){
      this.setState({diagnosa:'Obesitas'})
    }
    this.setState({printText:true});
  }
  render(){
    const data= ()=>{
      return <Text>{this.state.massa}</Text>
    };
    return(
      <Container>
        <Header >
          <Body style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: 'white', paddingHorizontal:120}}>Indeks Massa Tubuh</Text>
          </Body> 
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col>
                {/* <Left> */}
                  <Item floatingLabel>
                    <Label style={{fontSize:12, height:60}}> Massa(kg) </Label>
                    <Input style={{fontSize:14}} keyboardType="numeric"  onChangeText={(text) => this.setState({berat: parseInt(text)})}/>
                  </Item>
                {/* </Left> */}
              </Col>
              <Col>
                {/* <Right> */}
                  <Item floatingLabel style={{justifyContent:'center'}}>
                    <Label style={{fontSize:12}}> Tinggi(cm) </Label>
                    <Input style={{fontSize:14}} keyboardType="numeric" onChangeText={(text) => this.setState({tinggi: parseInt(text)})}/>
                  </Item>
                {/* </Right> */}
            </Col>
            </Row>
            <Row style={{justifyContent: 'center'}}>
            <Button style={{width:300, justifyContent:'center'}} onPress={()=>{this.calculate()}}><Text>Hitung IMT</Text></Button>
            </Row>
          
            <Row style={{justifyContent: 'center',marginVertical:10}}>
            {this.state.printText && 
              <Body>
                <Text> Massa Tubuh:</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.berat} kg</Text>
              </Body>
            }
            </Row>
            <Row style={{justifyContent: 'center',marginVertical:10}}>
            {this.state.printText && 
              <Body>
                <Text> Tinggi Badan: </Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.tinggi} m</Text>
              </Body>
            }
            </Row>
            <Row style={{justifyContent: 'center',marginVertical:10}}>            
            {this.state.printText && 
              <Body>
                <Text> Indeks Massa Tubuh: </Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.massa}</Text>
              </Body>
            }
            </Row>
            <Row style={{justifyContent: 'center',marginVertical:10}}>            
            {this.state.printText && 
              <Body>
                <Text style={{justifyContent: 'center'}}> Diagnosa: </Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.diagnosa}</Text>
              </Body>
            }
            </Row>
          </Grid>          
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;