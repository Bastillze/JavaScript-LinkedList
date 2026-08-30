class linkedList{
    new list() {
        this.head = null;
    }
}

class Node{
    new Node(value,next = null){
    this.value = value;
    this.next = next;
    }
}

let projectLinkedList = new linkedList();

function append(value) {
    head = value.append;
}

function prepend(value){
    head = addFirst(value);
}

function size(){
    projectLinkedList.size();
    return
}

function head(){
    if(head==null){
        return undefined;
    }
    else{
        return this.value;
    }
}

function tail(){
    tail = addLast(value);
}

function index(){
    if(current==value){
        return current.next;
    }
    else{
        return undefined;
    }
}

function pop(){
    head.pop();
    return value;
}

function contains(value){
    if(this.value==value){
        return true;
    }
    else{
        return false;
    }
}

function findIndex(value){
    if(this.value==value){
        return this.value;
    }
}

function toString(){
    projectLinkedList.toString();
}