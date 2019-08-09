import React from "react";
import { connect } from 'react-redux';
class BasketTr extends React.Component{
    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.posts.map((post, index) => (
                        <tr>
                            <th scope="row">{index +1}</th>
                            <td>{post.name}</td>
                            <td>{post.val}</td>
                            <td>{post.price}</td>
                            <td className='price'>{post.val*post.price}</td>
                            <td className='phhh'>{post.val*post.price}</td>
                            {/*{console.log(document.getElementsByClassName('price').innerHTML}*/}
                        </tr>
                    ))}

                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)( BasketTr);