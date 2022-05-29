import React from 'react';

class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.state = { count: 0 }
   }
   componentDidMount() {
      console.log("mounted");
   }
   componentDidUpdate() {
      console.log('Updated');
   }

   render() {
      console.log('rending');
      return (
         <>
            <div className='count-container'>
               <div className='count-lader'>{this.state.count}</div>
               <div className='action-container'>
                  <div className="btn minus-btn" onClick={() => {
                     if (this.state.count == 0) {
                        return
                     }
                     this.setState({ count: this.state.count - 1 })
                  }}>-</div>
                  <div className="btn reset-btn" onClick={() => {
                     this.setState({ count: 0 })
                  }}>Reset</div>
                  <div className="btn plus-btn" onClick={() => {
                     this.setState({ count: this.state.count + 1 })
                  }}>+</div>
               </div>
            </div>
         </>
      );
   }
}

export default Counter;
