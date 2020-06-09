const { BinarySearchTree } = require('../binary-search-tree/binary-search-tree')

class AVLTree extends BinarySearchTree {
  insert(value) {
    super.insert(value)
    let curNode = this.root.find(value)

    while (curNode) {
      this.balance(curNode)
      curNode = curNode.parent
    }
  }

  delete(value) {
    super.delete(value)
    this.balance(this.root)
  }

  balance(node) { 
    if (node.balanceFactor < -1) {
      if (node.right.right === null) {
        this.rightRotate(node.right)
      }
      this.leftRotate(node)
    }

    if (node.balanceFactor > 1) {
      console.log(node.value)
      if (node.left.left === null) {
        this.leftRotate(node.left)
      }
      this.rightRotate(node)
    }
  }

  leftRotate(rootNode) {
    const rightNode = rootNode.right
    rootNode.setRight(null)
    if (rootNode.parent === null) {
      rightNode.parent = null
      this.root = rightNode
    } else {
      rootNode.parent.setLeft(rightNode)
    }
    
    rightNode.setLeft(rootNode)
  }
  
  rightRotate(rootNode) {
    const leftNode = rootNode.left
    rootNode.setLeft(null)

    if (rootNode.parent === null) {
      leftNode.parent = null
      this.root = leftNode
    } else {
      if (rootNode.parent.left && rootNode.parent.left.value === rootNode.value) {
        rootNode.parent.setLeft(leftNode)
      }

      if (rootNode.parent.right && rootNode.parent.right.value === rootNode.value) {
        rootNode.parent.setRight(leftNode)
      }
    }
    
    leftNode.setRight(rootNode)
  }

}

const AVL = new AVLTree()
AVL.insert(12)
AVL.insert(8)
AVL.insert(18)
AVL.insert(11)
AVL.insert(17)
AVL.insert(5)
AVL.insert(4)
AVL.insert(3)
AVL.insert(6)

console.log(AVL.root.traverseInOrder())