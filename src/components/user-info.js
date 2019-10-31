'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/57118447?v=4' />
    <h1 className='username'>
      <a href='https://github.com/jsaints-dev'>Jean Saints</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 2</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
