import React from 'react'
import { Link } from 'react-router-dom'

const Groups = () => {
  return (
    <div className="teams-page col-12">
      <div className="col-12">
        <Link to={{
          pathname: '/groups/opens',
          state: {
            cat: 'opens',
            number: 12
          }
        }} className="teams-category col-6">
          OPENS
        </Link>
        <Link to={{
          pathname: '/groups/women',
          state: {
            cat: 'women',
            number: 6
          }
        }} className="teams-category col-6">
          WOMEN
        </Link>
      </div>
      <div className="col-12">
        <Link to={{
          pathname: '/groups/legends',
          state: {
            cat: 'legends',
            number: 6
          }
        }} className="teams-category col-4">
          LEGENDS
        </Link>
        <Link to={{
          pathname: '/groups/35a',
          state: {
            cat: '35a',
            number: 8
          }
        }} className="teams-category col-4">
          35A
        </Link>
        <Link to={{
          pathname: '/groups/u18',
          state: {
            cat: 'u18',
            number: 6
          }
        }} className="teams-category col-4">
          U18
        </Link>
      </div>
      <div className="col-12">
        <Link to={{
          pathname: '/groups/u15',
          state: {
            cat: 'u15',
            number: 8
          }
        }} className="teams-category col-4">
          U15
        </Link>
        <Link to={{
          pathname: '/groups/u12',
          state: {
            cat: 'u12',
            number: 6
          }
        }} className="teams-category col-4">
          U12
        </Link>
        <Link to={{
          pathname: '/groups/u9',
          state: {
            cat: 'u9',
            number: 6
          }
        }} className="teams-category col-4">
          U9
        </Link>
      </div>
    </div>
  )
}

export default Groups
