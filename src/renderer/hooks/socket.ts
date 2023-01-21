import { io } from 'socket.io-client'
import { useState, useRef, useEffect } from 'react'



const useWebsocket = ({}) => {

  const ws:any = useRef(null)
  const [wsData, setMessage] = useState('')
  const [readyState, setReadyState] = useState({ key: 0, value: '正在链接中' })





  //  关闭 WebSocket
  const closeWebSocket = () => {

  }


  return {

  }
}
export default useWebsocket
