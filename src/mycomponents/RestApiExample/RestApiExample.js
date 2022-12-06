import React from 'react';
import axios from 'axios';
import './style.css';

class NewUserButton extends React.Component{
    state={isFormOpen:false}
render()
{
    if(!this.state.isFormOpen){
        return(<button onClick={()=>{
            this.setState({isFormOpen:true})
        }}>{this.props.children}</button>)

    }
    return(<div className='popup-form'>
        <form>
            <h1>This is popup form</h1>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Gender</label>
            <div className='gender-container'>
            <input type="radio" name="gender" value={"male"} id="male"></input>
            <label for="male">male</label>
            <input type="radio" name="gender" value={"female"} id="female" style={{marginLeft:10}}></input>
            <label for="female">female</label>
            </div>      
            <button type="submit">Submit</button>
            <button type="button" onClick={()=>{
                  this.setState({isFormOpen:false})

            }}>Cancel</button>
        </form>
    </div>)

}  
    
}


class RestApiExample extends React.Component
{
    state={recoredId:"",obj:{},arr:[]}
    componentDidMount(){
        this.loadAllData();
    }

    
    loadAllData=()=>{
        axios.get("https://gorest.co.in/public/v2/users")
        .then((response)=>{
            this.setState({arr:response.data});
        }).catch(function(err){
            console.log(err.message);
        });
    }
    loadDataById=()=>{
        axios.get("https://gorest.co.in/public/v2/users/"+this.state.recoredId)
        .then((response)=>{
            this.setState({obj:response.data});
        }).catch(function(err){
            console.log(err.message);
            alert(err.message);
        });
    }
    render(){
        return(<React.Fragment>
<form onSubmit={(e)=>{
    e.preventDefault();
    this.loadDataById();
}}>
            <input type="number" onChange={(e)=>{
                    this.setState({recoredId:e.target.value});
            }}
            value={this.state.recoredId}/>
            <button type="submit">Get Data</button>
            </form>

<hr/>
<hr/>            
<NewUserButton>Add New User</NewUserButton>
            <table border="2px">
            <thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Gender</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
                  {this.state.arr.map((o)=>{
                    return(<tr>
                        <td>{o["id"]}</td>
                        <td>{o["name"]}</td>
                        <td>{o["email"]}</td>
                        <td>{o["gender"]}</td>
                        <td>{o["status"]}</td>
                        <td><button type="button" onClick={()=>{
                            this.setState({obj:o});
                        }}>Show Details</button></td>
                    </tr>)
                  })}  
            </tbody>
            </table>
            <table border="2px">
		        <tr>
            		<th>ID</th>
                    <td>{this.state.obj["id"]}</td>
				</tr>
                <tr>
                    <th>Name</th>
					<td>{this.state.obj["name"]}</td>
				</tr>
                <tr>
                    <th>Email</th>
					<td>{this.state.obj["email"]}</td>
                </tr>
                <tr>
                    <th>Gender</th>
					<td>{this.state.obj["gender"]}</td>
                </tr>
                <tr>
                    <th>Status</th>
					<td>{this.state.obj["status"]}</td>
                </tr>
            </table>

        </React.Fragment>)
    }
}


export default RestApiExample;