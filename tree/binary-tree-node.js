class BinaryTreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  get leftHeight() {
    if (!this.left) return 0
    return this.left.height + 1
  }

  get rightHeight() {
    if (!this.right) return 0
    return this.right.height + 1
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  setLeft(node) {
    this.left = node

    if (this.left) {
      this.left.parent = this
    }
    
    return this
  }

  setRight(node) {
    this.right = node

    if (this.right) {
      this.right.parent = this
    }

    return this
  }

  setValue(value) {
    this.value = value
  }

  removeChild(nodeToRemove) {
    if (this.left && nodeToRemove.value === this.left.value) {
      this.left = null
      return true
    }

    if (this.right && nodeToRemove.value === this.right.value) {
      this.right = null
      return true
    }
    return false
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) return false

    if (this.left && this.left.value === nodeToReplace.value) {
      this.left = replacementNode
      return true
    }

    if (this.right && this.right.value === nodeToReplace.value) {
      this.right = replacementNode
      return true
    }
    return false
  }
  
  traverseInOrder() {
    let res = []

    if (this.left) {
      res = res.concat(this.left.traverseInOrder())
    }
    res.push(this.value)
    if (this.right) {
      res = res.concat(this.right.traverseInOrder())
    }
    return res
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }
}

module.exports = { BinaryTreeNode }