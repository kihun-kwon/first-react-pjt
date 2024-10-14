import React from "react";
 
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import Todo from "../pages/todo/Todo"
import TodoListPage from "../pages/todo/TodoListPage"
import TodoAddPage from "../pages/todo/TodoAddPage";
import TodoReadPage from "../pages/todo/TodoReadPage";
import ArrayRender from "../pages/render/ArrayRender";
import ArrayRenderUpdate from "../pages/render/ArrayRenderUpdate";
import ReducerArrayRender from "../pages/render/ReducerArrayRender";
import ReducerArrayRenderUpdate from "../pages/render/ReducerArrayRenderUpdate";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MainPage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/todo" element={<Todo/>}>
                    <Route path="add" element={<TodoAddPage/>}></Route>
                    <Route path="list" element={<TodoListPage/>}></Route>
                    <Route path="read/:readId" element={<TodoReadPage />}></Route>
                    <Route path="" element={<TodoListPage/>}></Route>
                </Route>
                <Route path="/arrayRender" element={<ArrayRender/>}>
                    <Route path="update/:dataId" element={<ArrayRenderUpdate/>}></Route>
                </Route>
                <Route path="/reducerArrayRender" element={<ReducerArrayRender/>}>
                    <Route path="update/:dataId" element={<ReducerArrayRenderUpdate/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter> 
    );
};

export default Router;