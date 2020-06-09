const { BinarySearchTree } = require('../binary-search-tree/binary-search-tree')

class AVLTree extends BinarySearchTree {
  // Insert the given data into tree
  insert(value) {
    super.insert(value)
    let curNode = this.root.find(value)

    while (curNode) {
      this.balance(curNode)
      curNode = curNode.parent
    }
  }

  // Delete the given data into tree
  delete(value) {
    super.delete(value)
    this.balance(this.root)
  }

  // Use to re-balance tree after inserting or deleting a node
  balance(node) { 
    if (node.balanceFactor < -1) {
      if (node.right.right === null) {
        this.rightRotate(node.right)
      }
      this.leftRotate(node)
    } else if (node.balanceFactor > 1) {
      if (node.left.left === null) {
        this.leftRotate(node.left)
      }
      this.rightRotate(node)
    }
  }

  // Left rotate at given node
  leftRotate(rootNode) {
    // Detach left right node from root node since it going to be replaced
    const rightNode = rootNode.right
    rootNode.setRight(null)

    if (rootNode.parent === null) {
      rightNode.parent = null
      this.root = rightNode
    } else {
      if (rootNode.parent.left && rootNode.parent.left.value === rootNode.value) {
        rootNode.parent.setLeft(rightNode)
      }

      if (rootNode.parent.right && rootNode.parent.right.value === rootNode.value) {
        rootNode.parent.setRight(rightNode)
      }
    }
    
    if (rightNode.left) {
      const rightLeftNode = rightNode.left
      if (rootNode.right === null) {
        rootNode.setRight(rightLeftNode)
      } else {
        rootNode.setLeft(rightLeftNode)
      }
    }
    
    rightNode.setLeft(rootNode)
  }

  // Right rotate at given node
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

    if (leftNode.right) {
      const leftRightNode = leftNode.right
      if (rootNode.right === null) {
        rootNode.setRight(leftRightNode)
      } else {
        rootNode.setLeft(leftRightNode)
      }
    }
    
    leftNode.setRight(rootNode)
  }

}

const AVL = new AVLTree()
AVL.insert(43)
AVL.insert(18)
AVL.insert(22)
AVL.insert(9)
AVL.insert(21)
AVL.insert(6)
AVL.insert(8)
AVL.insert(20)
AVL.insert(63)
AVL.insert(50)
AVL.insert(62)
AVL.insert(51)

AVL.delete(51)
AVL.delete(43)

console.log(AVL.root.find(21))

module.exports = { AVLTree }
