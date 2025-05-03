import { useMemo } from 'react'
import { UseBroadcastChannelProp } from '../types/broadcastChannel'

const useBroadcastChannel: UseBroadcastChannelProp = (channelName, swalModal, navigate) => {
  const broadcastChannel = useMemo(
    () => new BroadcastChannel(channelName),
    [channelName])

  const data = (data) => {
    broadcastChannel.postMessage(data);
  }
}

export default useBroadcastChannel