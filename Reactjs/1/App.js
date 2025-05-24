 function HeadingComponent(props){
            return React.createElement('h1',{},props.name)
        }
        const tempHeadingComponent=React.createElement(HeadingComponent,{name:"Asad"})
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(root);
        root.render(tempHeadingComponent);