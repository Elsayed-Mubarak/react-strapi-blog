import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import {
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

class FormProduct extends Component {

    state = {
        model: {
            id: 0,
            title: '',
            content: ''
        }
    };

    setValues = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    }

    create = () => {
        this.setState({ model: { id: 0, title: '', content: '' } })
        this.props.productCreate(this.state.model);
    }

    componentWillMount() {
        PubSub.subscribe('edit-product', (topic, product) => {
            this.setState({ model: product });
        });
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input id="title" type="text" value={this.state.model.title} placeholder=" Blog Title..."
                        onChange={e => this.setValues(e, 'title')} />
                </FormGroup>
                <FormGroup>
                    <div className="form-row">
                        <div className="col-md-6">
                            <Label for="content">Content:</Label>
                            <Input id="content" type="text" value={this.state.model.content} placeholder="Blog Description "
                                onChange={e => this.setValues(e, 'content')} />
                        </div>
                    </div>
                </FormGroup>
                <Button color="primary" block onClick={this.create}> Add </Button>
            </Form>
        );
    }
}

class ListProduct extends Component {

    delete = (id) => {
        this.props.deleteProduct(id);
    }

    onEdit = (product) => {
        PubSub.publish('edit-product', product);
    }

    render() {
        const { products } = this.props;
        console.log(products, "...");
        return (
            <Table className="table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.title}</td>
                                <td>{product.content}</td>
                                <td>
                                    <Button color="info" size="sm" onClick={e => this.onEdit(product)}>Edit</Button>
                                    <Button color="danger" size="sm" onClick={e => this.delete(product.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

export default class ProductBox extends Component {

    Url = 'https://blog-managment-system.herokuapp.com/articles';

    state = {
        products: [],
        message: {
            text: '',
            alert: ''
        }
    }

    componentDidMount() {
        fetch(this.Url)
            .then(response => response.json())
            .then(products => this.setState({ products }))
            .catch(e => console.log(e));
    }

    save = (product) => {
        let data = {
            id: parseInt(product.id),
            title: product.title,
            content: product.content,
        };
        console.log(data);

        const requestInfo = {
            method: data.id !== 0 ? 'PUT' : 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        if (data.id === 0) {
            // CREATE NEW PRODUCT
            fetch(this.Url, requestInfo)
                .then(response => response.json())
                .then(newProduct => {
                    let { products } = this.state;
                    products.push(newProduct);
                    this.setState({ products, message: { text: 'New Articel Added Sucess!', alert: 'success' } });
                    this.timerMessage(3000);
                })
                .catch(e => console.log(e));
        } else {
            // EDIT PRODUCT
            fetch(`${this.Url}/${data.id}`, requestInfo)
                .then(response => response.json())
                .then(updatedProduct => {
                    let { products } = this.state;
                    let position = products.findIndex(product => product.id === data.id);
                    products[position] = updatedProduct;
                    this.setState({ products, message: { text: 'Articel updated Sucess!', alert: 'info' } });
                    this.timerMessage(3000);
                })
                .catch(e => console.log(e));
        }
    }

    delete = (id) => {
        fetch(`${this.Url}/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(rows => {
                const products = this.state.products.filter(product => product.id !== id);
                this.setState({ products, message: { text: ' Articel Deleted Sucess.', alert: 'danger' } });
                this.timerMessage(3000);
            })
            .catch(e => console.log(e));
    }

    timerMessage = (duration) => {
        setTimeout(() => {
            this.setState({ message: { text: '', alert: '' } });
        }, duration);
    }

    render() {
        return (
            <div >
                {
                    this.state.message.text !== '' ? (
                        <Alert color={this.state.message.alert} className="text-center"> {this.state.message.text} </Alert>
                    ) : ''
                }

                <div className="row">

                    <div className="col-md-6 my-3">
                        <h2 className="font-weight-bold text-center"> Add New Articel </h2>
                        <FormProduct productCreate={this.save} />
                    </div>
                    <div className="col-md-6 my-3">
                        <h2 className="font-weight-bold text-center"> List Of Articels </h2>
                        <ListProduct products={this.state.products} deleteProduct={this.delete} />
                    </div>
                </div>
            </div>
        );
    }
}