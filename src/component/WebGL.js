import React, { Component } from 'react';

class WebGL extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            webGL: null,
            canvas: {
                width: 1280,
                height: 720
            }
        }

    }

    componentDidMount() {
        this.init();
    }

    initWebGL = (canvas) => {
        let gl = null;
        
        try {
          gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        }
        catch(e) {}
        
        if (!gl) {
          gl = null;
        }
        
        return gl;
      }

    init = () => {
        const canvas = document.getElementById("webGL");

        const webgl = this.initWebGL(canvas);

        this.setState({ webGL: webgl});

        if(webgl) {
            // 동적으로 webGL Context 크기 셋팅하는 방법
            canvas.width = this.state.canvas.width;
            canvas.height = this.state.canvas.height;
            webgl.viewport(0, 0, canvas.width, canvas.height);

            webgl.clearColor(0.0, 0.0, 0.0, 1.0);
            webgl.clear(webgl.COLOR_BUFFER_BIT);
        }
    }
    
    render() {
        return (
            <canvas id="webGL"
                width="500"
                height="500"
            >
            </canvas>
        )
    }
}

export default WebGL;