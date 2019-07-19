import React from "react"

interface TreeNodeProps {}
interface TreeNodeState {}

export class TreeNode extends React.Component<TreeNodeProps, TreeNodeState> {
  state: TreeNodeState = {}

  render() {
    return <div>TreeNode</div>
  }
}
