import React, { useEffect, useState } from 'react'
// import Header from './Layouts/Header'
import LeftAside from './Layouts/LeftAside'
import RightAside from './Layouts/RightAside'
import RightNav from "./Layouts/RightNav"
// import Footer from './Layouts/Footer'
import { Outlet } from 'react-router-dom'
import { loadLink, loadScripts } from '../../../util/helper'
// import { *asexportHooks } from 'fullcalendar/src/exports';

export default function LayoutAdmin() {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {
      document.body.className = 'theme-blush';
      // Load CSS
      let links = loadLink([
        '../css/AdminPage/vendor/bootstrap.min.css',
        '../css/AdminPage/vendor/jquery-jvectormap-2.0.3.min.css',
        '../assets/plugins/bootstrap-select/css/bootstrap-select.css',
        '../css/AdminPage/vendor/dataTables.bootstrap4.min.css',
        '../css/AdminPage/vendor/style.min.css',
        '../assets/plugins/dropify/css/dropify.min.css',
        '../assets/plugins/multi-select/css/multi-select.css',
        '../assets/plugins/select2/select2.css',
        
        // '../assets/plugins/footable-bootstrap/css/footable.bootstrap.min.css',
        // '../assets/plugins/footable-bootstrap/css/footable.standalone.min.css',
      ]);
      // Load file scripts của layout client
      let scripts = loadScripts([
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-main.js',
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-vendor.js',
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-chunk-vendors.js',
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-chunk-common.js',
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-runtime.js',
        'https://embed.tawk.to/_s/v4/app/64d21bf31fc/js/twk-app.js',
        'https://embed.tawk.to/59f5afbbbb0c3f433d4c5c4c/default',
        '../js/AdminPage/libscripts.bundle.js',
        '../js/AdminPage/mainscripts.bundle.js',
        '../js/AdminPage/vendorscripts.bundle.js',
        '../assets/js/pages/tables/jquery-datatable.js',
        '../assets/bundles/datatablescripts.bundle.js',
        '../assets/plugins/jquery-datatable/buttons/dataTables.buttons.min.js',
        '../assets/plugins/jquery-datatable/buttons/buttons.bootstrap4.min.js',
        '../assets/plugins/jquery-datatable/buttons/buttons.colVis.min.js',
        '../assets/plugins/jquery-datatable/buttons/buttons.flash.min.js',
        '../assets/plugins/jquery-datatable/buttons/buttons.html5.min.js',
        '../assets/plugins/jquery-datatable/buttons/buttons.print.min.js',
        '../assets/js/pages/forms/basic-form-elements.js',
        '../assets/js/pages/forms/form-validation.js',
        '../assets/plugins/jquery-validation/jquery.validate.js',
        '../assets/plugins/jquery-steps/jquery.steps.js',
        '../assets/plugins/dropify/js/dropify.min.js',
        '../assets/js/pages/forms/dropify.js',
        '../assets/plugins/select2/select2.min.js',
        '../assets/js/pages/forms/advanced-form-elements.js',
        '../assets/plugins/multi-select/js/jquery.multi-select.js',
        // '../assets/bundles/footable.bundle.js',
        // '../assets/js/pages/tables/footable.js',
      ]);
      return () => {
        // Xóa file scripts khi không dùng layout client nữa
        for (let src of scripts) {
          src.remove();
        }
        // Xóa CSS
        for (let link of links) {
          link.remove();
        }
      }
    } else {
      setIsMount(true);
    }
  }, [isMount])
  return (
    <div> 
      <RightNav/>
      <LeftAside /> 
      <Outlet />
    </div>
  )
}
