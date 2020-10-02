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
            number: 18
          }
        }} className="teams-category col-12">
          OPENS
        </Link>
        <Link to={{
          pathname: '/groups/legends',
          state: {
            cat: 'legends',
            number: 12
          }
        }} className="teams-category col-12">
          LEGENDS
        </Link>
        <Link to={{
          pathname: '/groups/35a',
          state: {
            cat: '35a',
            number: 8
          }
        }} className="teams-category col-12">
          35A
        </Link>
      </div>
      <div className="col-12">
        <Link to={{
          pathname: '/groups/u19',
          state: {
            cat: 'u19',
            number: 4
          }
        }} className="teams-category col-12">
          U19
        </Link>
        <Link to={{
          pathname: '/groups/u17',
          state: {
            cat: 'u17',
            number: 4
          }
        }} className="teams-category col-12">
          U17
        </Link>
        <Link to={{
          pathname: '/groups/u15',
          state: {
            cat: 'u15',
            number: 6
          }
        }} className="teams-category col-12">
          U15
        </Link>
      </div>
      <div className="col-12">
        <Link to={{
          pathname: '/groups/u13',
          state: {
            cat: 'u13',
            number: 4
          }
        }} className="teams-category col-12">
          U13
        </Link>
        <Link to={{
          pathname: '/groups/u11',
          state: {
            cat: 'u11',
            number: 4
          }
        }} className="teams-category col-12">
          U11
        </Link>
        <Link to={{
          pathname: '/groups/u9',
          state: {
            cat: 'u9',
            number: 4
          }
        }} className="teams-category col-12">
          U9
        </Link>
      </div>
    </div>
  )
}

export default Groups
