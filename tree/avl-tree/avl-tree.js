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

  balance(node) {
    // if (node.balanceFactor < -1) {
    //   if (node.right === null) {
    //     this.rightRotate(node.right)
    //   }
    //   this.leftRotate(node)
    // }

    if (node.balanceFactor > 1) {
      if (node.left === null) {
        this.leftRotate(node.left)
      }
      this.rightRotate(node)
    }
  }
  
  rightRotate(rootNode) {
    const leftNode = rootNode.left
    rootNode.setLeft(null)
    
    if (rootNode.parent === null) {
      this.root = leftNode
    } else {
      rootNode.parent.setLeft(leftNode)
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
AVL.insert(4.5)

AVL.insert(3)

console.log(AVL.root)