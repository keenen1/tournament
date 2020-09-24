import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="teams-page col-12">
      <div className="left-panel col-12">
        <Link to={{
          pathname: '/category/opens',
          state: {
            cat: 'opens',
            number: 18
          }
        }} className="teams-category col-12">
          OPENS
        </Link>
        <Link to={{
          pathname: '/category/legends',
          state: {
            cat: 'legends',
            number: 12
          }
        }} className="teams-category col-12">
          Legends
        </Link>
        <Link to={{
          pathname: '/category/35a',
          state: {
            cat: '35a',
            number: 8
          }
        }} className="teams-category col-12">
          35A
        </Link>
      </div>
      <div className="middle-panel col-12">
        <Link to={{
          pathname: '/category/u19',
          state: {
            cat: 'u19',
            number: 4
          }
        }} className="teams-category col-12">
          U19
        </Link>
        <Link to={{
          pathname: '/category/u17',
          state: {
            cat: 'u17',
            number: 4
          }
        }} className="teams-category col-12">
          U17
        </Link>
        <Link to={{
          pathname: '/category/u15',
          state: {
            cat: 'u15',
            number: 6
          }
        }} className="teams-category col-12">
          U15
        </Link>
      </div>
      <div className="right-panel col-12">
        <Link to={{
          pathname: '/category/u13',
          state: {
            cat: 'u13',
            number: 4
          }
        }} className="teams-category col-12">
          U13
        </Link>
        <Link to={{
          pathname: '/category/u11',
          state: {
            cat: 'u11',
            number: 4
          }
        }} className="teams-category col-12">
          U11
        </Link>
        <Link to={{
          pathname: '/category/9u',
          state: {
            cat: '9u',
            number: 4
          }
        }} className="teams-category col-12">
          9U
        </Link>
      </div>
    </div>
  )
}

export default Categories
