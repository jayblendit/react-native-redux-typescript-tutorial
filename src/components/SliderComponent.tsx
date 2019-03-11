import React, { Component } from 'react';
import {
    View, Text, Icon
} from 'native-base'
import {
    StyleSheet, TouchableOpacity, PanResponder, Animated, Dimensions
} from 'react-native'
// import { createResponder } from 'react-native-gesture-responder'

export interface Props { }
export interface State {
    pan: any,
    width: any,
    height: any,
    x: any,
    y: any,
    panX: any,
    panY: any,
    loaded: boolean
}

export default class SliderComponent extends Component<Props, State> {
    private panVal = { x: 0, y: 0 };
    private panResponder;
    private container;
    private animatedValue;
    private value;
    private boundX = 0;
    private boundY = 0;
    private previousMoveX = 0;
    private previousMoveY = 0;

    constructor(props) {
        super(props)

        this.state = {
            pan: new Animated.ValueXY(),
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            panX: 0,
            panY: 0,
            loaded: false
        }
    }

    componentWillMount() {
        // console.log("sliderBtn", this.sliderBtn)
        // Add a listener for the delta value change
        this.panVal = { x: 0, y: 0 }
        this.state.pan.addListener((value) => this.panVal = value);
        // // Initialize PanResponder with move handling
        
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            // onPanResponderMove: (e, gesture) => {
            //     const maxX = 250
            //     const minX = 0
            //     const maxY = 250
            //     const minY = 0
            //     // // custom logic here
                
            //     const xDiff = gesture.moveX - this.previousMoveX
            //     const yDiff = gesture.moveY - this.previousMoveY
            //     let newX = this.state.pan.x._value + xDiff
            //     let newY = this.state.pan.y._value + yDiff

            //     if (newX < minX) {
            //         newX = minX
            //     } else if (newX > maxX) {
            //         newX = maxX
            //     }

            //     if (newY < minY) {

            //         newY = minY
            //     } else if (newY > maxY) {
            //         newY = maxY
            //     }
            //     console.log("newX", newX)
            //     console.log("newY", newY)
            //     this.previousMoveX = newX
            //     this.previousMoveY = newY
            //     // Animated.event([
            //     //     null, { dx: this.state.pan.x, dy: this.state.pan.y }
            //     // ])
            //     Animated.spring(this.state.pan, {
            //         toValue: { x: newX, y: newY },
            //         friction: 5
            //     }).start();
            // },
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(this.state.pan, {
                    toValue: { x: 0, y: 0 },
                    friction: 5
                }).start();
            }
            // adjusting delta value
            // this.setState({
            //     pan: { x: 0, y: 0 }
            // })
        });    

        // this.initiateAnimator()
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.state.pan.removeAllListeners()
    }

    onLayoutContainer = async (e) => {
        await this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
            x: e.nativeEvent.layout.x,
            y: e.nativeEvent.layout.y
        })
        // this.initiateAnimator()
    }

    initiateAnimator = () => {
        console.log("init animator here")
        // this.panVal = { x: 0, y: 0 }
        // this.state.pan.addListener((value) => this.panVal = value);
        // Initialize PanResponder with move handling

        // let minX = this.state.x
        // let minY = this.state.y
        // let maxX = this.state.x + this.state.width
        // let maxY = this.state.y + this.state.height
        
        // this.panResponder = createResponder({
        //     onStartShouldSetResponder: () => true,
        //     onStartShouldSetResponderCapture: () => true,
        //     onMoveShouldSetResponder: () => true,
        //     onMoveShouldSetResponderCapture: () => true,
        //     onResponderMove: (evt, gestureState) => {
        //         this.pan(gestureState)
        //     },
        //     onResponderRelease: (e, gesture) => {
        //         // console.log("on pan release called")
        //         Animated.spring(this.state.pan, {
        //             toValue: { x: 0, y: 0 },
        //             friction: 5
        //         }).start();
        //         // this.setState({
        //         //     panX: 0,
        //         //     panY: 0
        //         // })
        //     },
        //     onPanResponderTerminationRequest: () => true,
        // })
        // // this.panResponder = createResponder({
        // //     onStartShouldSetPanResponder: (e, gesture) => true,
        // //     onMoveShouldSetPanResponderCapture: () => true,
        // //     onResponderMove: (e, gestureState) => {
                
        // //     },
        // //     onPanResponderRelease: (e, gesture) => {
        // //         Animated.spring(this.state.pan, {
        // //             toValue: { x: 0, y: 0 },
        // //             friction: 5
        // //         }).start();
        // //     }
        // //     // adjusting delta value
        // //     // this.setState({
        // //     //     pan: { x: 0, y: 0 }
        // //     // })
        // // });
        // this.setState({
        //     loaded: true
        // })
    }

    pan = (gestureState) => {
        console.log("this.state.width", this.state.width)
        console.log("device width", Dimensions.get('window').width)
        console.log("this.state.x", this.state.x)
        console.log("this.state.y", this.state.y)
        const maxHere = this.state.width - this.state.x
        console.log("computation", maxHere)
        const maxX = 250
        const minX = 0
        const maxY = 250
        const minY = 0
        // // custom logic here
        const xDiff = gestureState.moveX - gestureState.previousMoveX
        const yDiff = gestureState.moveY - gestureState.previousMoveY
        let newX = this.state.panX + xDiff
        let newY = this.state.panY + yDiff

        if (newX < minX) {
            newX = minX
        } else if (newX > maxX) {
            newX = maxX
        }

        if (newY < minY) {
            newY = minY
        } else if (newY > maxY) {
            newY = maxY
        }

        // this.setState({
        //     panX: newX,
        //     panY: newY
        // })
        Animated.spring(this.state.pan, {
            toValue: { x: newX, y: newY },
            friction: 5
        }).start();
                // Animated.event([null, {
                //     dx: newX,
                //     dy: newY,
                // }])(e, gestureState); // <<--- INVOKING HERE!
    }

    render() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
            // left: this.state.panX + 8,
            // top: this.state.panY
        }

        let panHandlers = this.panResponder ? this.panResponder.panHandlers : null

        return (
            <View 
                ref={(ref) => this.container = ref}
                onLayout={this.onLayoutContainer}
                style={styles.sliderContainer}
            >
                <Animated.View
                    {...panHandlers}
                    style={{
                        ...panStyle,
                        position: 'absolute',
                        left: 8,
                        top: 4
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.sliderButton}
                    >
                        <Icon name="ios-arrow-forward" style={styles.icon} />
                    </TouchableOpacity>
                </Animated.View>
                <Text style={styles.label}>
                    SLIDE TO CONFIRM
                </Text>
            </View>
        )
    }
}

const styles: any = StyleSheet.create({
    sliderContainer: {
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#F3B068',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ff0000'
    },
    sliderButton: {
        // left: 8,
        borderWidth: 3,
        borderColor: '#F3B068',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        backgroundColor: '#000',
        borderRadius: 100,
        position: 'absolute',
    },
    label: {
        color: 'white',
    },
    icon: {
        fontSize: 20,
        color: '#fff'
    }
});