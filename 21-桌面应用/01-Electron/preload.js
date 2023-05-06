/**
 * 预加载脚本
 */

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 向主进程发生消息
  renderingMsg: () => ipcRenderer.invoke('renderingMsg'),
})