// 项目主要模块：推荐（Recommend），歌手（Singers），排行（Rank）
import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export const routes = [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/Recommend"} />
                )
            },
            {
                path: "/Recommend",
                component: Recommend
            },
            {
                path: "/Singers",
                component: Singers
            },
            {
                path: "/Rank",
                component: Rank
            }
        ]
    }
]