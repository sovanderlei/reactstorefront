/* eslint-disable no-useless-concat */
import React from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe,faRefresh,
  faVectorSquare,faMoneyBillTrendUp,
  faFileWaveform} from "@fortawesome/free-solid-svg-icons";  
import ChartLine from '../../components/ChartLine'
import { ChartPizza } from './../../components/ChartPizza';
import { ChartGauge } from '../../components/ChartGauge';
import { ChartBarvert } from './../../components/ChartBarVert';
import { ChartArea } from './../../components/ChartArea';

export function Dashboard() { 
  
    function getCardsDasboard(){
      const tbdata = [
        {id:'01', category:'Capacity',title:'150GB', foot:'Update Now',iconname:'faGlobe', classcard:'card card-stats bg-light', clasname:'nc-icon nc-globe text-warning' } ,
        {id:'01', category:'Revenue',title:'$ 1,345', foot:'Last day',iconname:'faMoneyBillTrendUp', classcard:'card card-stats bg-primary', clasname:'nc-icon nc-money-coins text-light' }, 
        {id:'01', category:'Errors',title:'23', foot:'In the last hour',iconname:'faVectorSquare', classcard:'card card-stats bg-warning', clasname:'nc-icon nc-vector text-danger' }, 
        {id:'01', category:'Followers',title:'+45K', foot:'Update now',iconname:'faFileWaveform', classcard:'card card-stats bg-danger', clasname:'nc-icon nc-favourite-28 text-primary' } 
      ]
     
      return tbdata.map((item, index) => {
        let icon = faGlobe;
        if(item.iconname === 'faGlobe'){
          icon = faGlobe;
        } 
        if(item.iconname === 'faMoneyBillTrendUp'){
          icon = faMoneyBillTrendUp;
        } 
        if(item.iconname === 'faVectorSquare'){
          icon = faVectorSquare;
        } 
        if(item.iconname === 'faFileWaveform'){
          icon = faFileWaveform;
        }         
        
        return( 
            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div className={item.classcard} >
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning"> 
                          <FontAwesomeIcon icon={icon}  className={item.clasname}  aria-hidden="true" />
                        </div>
                      </div>
                      <div className="col-7 col-md-8">
                        <div className="numbers">
                          <p className="card-category">{item.category}</p>
                          <p className="card-title">{item.title}</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer "> 
                    <div className="stats"> 
                        <FontAwesomeIcon icon={faRefresh}  className="fa fa-refresh"  aria-hidden="true" />
                         {"  "+item.foot}
                    </div>
                  </div>
                </div>
            </div>
 
        )
      });

    }

    function getChart001Dasboard(title){
     
      return( 
          <div className="col-lg-6 ">
              <div className="card card-stats bg-light" >
              <div class="card-header">
                {title} 
              </div> 
                <div className="card-body ">
                  <div className="row" > 
                    <ChartLine title={title} />
                  </div>
                </div>
                <div className="card-footer "> 
                  <div className="stats"> 
                      <FontAwesomeIcon icon={faRefresh}  className="fa fa-refresh"  aria-hidden="true" />
                        {"  " + "rodape"}
                  </div>
                </div>
              </div>
          </div>

      );

    }

    function getChartType(typeChart,titlest){
      if(typeChart === "ChartPizza"){
        return <ChartPizza title={titlest}></ChartPizza>;
      }
      if(typeChart === "ChartGauge"){
        return <ChartGauge></ChartGauge>;
      }
      if(typeChart === "ChartBarvert"){
        return <ChartBarvert></ChartBarvert>
      }
      if(typeChart === "ChartArea"){
        return <ChartArea></ChartArea>
      } 
    }
  
    function getChart003Dasboard(typeChart,titlest,paddingTopgt,paddingLeftt){
     
      return( 
          <div className="col-lg-3  ">
              <div className="card card-stats bg-light" >
              <div class="card-header">
                 {titlest} 
              </div> 
                <div className="card-body ">
                  <div className="row">
                   
                    <div className="col-12" style={{minHeight: 400, paddingTop:paddingTopgt, paddingLeft: paddingLeftt}} >
                      
                      {getChartType(typeChart,titlest)}

                    </div> 
                  </div>
                </div>
                <div className="card-footer "> 
                  <div className="stats"> 
                      <FontAwesomeIcon icon={faRefresh}  className="fa fa-refresh"  aria-hidden="true" />
                        {"  " + "rodape"}
                  </div>
                </div>
              </div>
          </div>

      );

    }
 
    return (
      <div style={{padding:10}} > 
       
        <div className="row"> 
            {getCardsDasboard()} 
        </div>        
        <div className="row"> 
          {getChart001Dasboard("Title 001")}
          {getChart001Dasboard("Title 002")}
        </div> 
        <div className="row"> 
          {getChart003Dasboard("ChartPizza","Chart Pizza", 0, 0)}
          {getChart003Dasboard("ChartGauge","Chart Gauge", 100, 60)}
          {getChart003Dasboard("ChartBarvert","Chart Barvert", 0, 0)}    
          {getChart003Dasboard("ChartArea","Chart Area", 0, 0)}         
        </div>  
        <div className="row"> 
             
        </div>  
        <div className="row"> 
             
        </div>          

      </div>
    );
   
}

