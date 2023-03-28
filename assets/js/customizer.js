/*=====================
     04. Dark & Rtl mode js
   ==========================*/
window.location.pathname.includes('rtl.html') && (localStorage.layout = 'rtl')
// window.location.pathname.includes('dark-layout.html') && (localStorage.theme === 'light');
/* This is declaring variables. */
let theme = localStorage.theme || '';
let layout = localStorage.layout || '';
let sidebarType = localStorage.sidebarType || '';
// let monochrome = localStorage.monochrome || false;
const lightCheckBox = document.getElementById('light-checked');
const darkCheckBox = document.getElementById('dark-checked');
const ltrChecked = document.getElementById('ltr-checked');
const rtlChecked = document.getElementById('rtl-checked');
const fullSidebarChecked = document.getElementById('full-sidebar');
const iconSidebarChecked = document.getElementById('icon-sidebar');
const customizerBtn = document.querySelector('.customizer-btn');
const customizerCloseBtn = document.querySelector('.customizer-close');
const customizerSidebar = document.querySelector('.customizer-sidebar');
const reseteCustomizer = document.querySelector('.reset-customizer');
const mainPageWrapper = document.querySelector('.page-wrapper');
const monochromeSwitch = document.querySelector('#monochrome');

/* This is adding an event listener to the customizerBtn and customizerCloseBtn. When the customizerBtn
is clicked, it will add the class 'show' to the customizerSidebar. When the customizerCloseBtn is
clicked, it will remove the class 'show' from the customizerSidebar. */

/// Customizer Sidebar Show ///
customizerBtn.addEventListener('click', function () {
  customizerSidebar.classList.add('show');
});

/// Customizer Sidebar Hide ///
customizerCloseBtn.addEventListener('click', function () {
  customizerSidebar.classList.remove('show');
});

/**
 * The above function removes the 'checked' attribute from the first argument and adds the 'checked'
 * attribute to the second argument.
 * @param removeAttributeEl - The element that you want to remove the attribute from.
 * @param addAttributeEl - The element that you want to add the attribute to.
 */
const radioBtnCheckedFunction = function (removeAttributeEl, addAttributeEl) {
  removeAttributeEl.removeAttribute('checked');
  addAttributeEl.setAttribute('checked', 'checked');
};

/// Fetch Local Storage ///
/* This is a function that is called when the DOM is loaded. It is checking the local storage for the
theme, layout, monochrome, and sidebarType. If it finds them, it will set the theme, layout,
monochrome, and sidebarType to the values that were found in the local storage. If it does not find
them, it will set the theme, layout, monochrome, and sidebarType to the default values. */
document.addEventListener('DOMContentLoaded', function () {

  const pathName = window.location.pathname.split('/').pop();

  // if (pathName === 'dark-layout.html') {
  //   console.log("if 58");
  //   darkMode();
  // } else 


  /// Fetch monochromeSwitch Mode ///
  console.log("localStorage.monochrome", localStorage.getItem('monochrome'));
  const monochrome = localStorage.getItem('monochrome');
  // debugger
  if (monochrome === true) {
    console.log("local stored");
    monochromeModeFunction()
  } else if (pathName === 'monochrome-mode.html') {
    document.body.classList.add('monochrome-mode');
  } else if (monochrome === true && pathName != 'monochrome-mode.html') {
    console.log("95 .....");
    monochromeModeFunction()
  } else {
    localStorage.setItem('monochrome', false);
    console.log("else called 76");
    document.body.classList.remove('monochrome-mode');
    // resetMonochromeModeFunction()
  }

  /// Fetch Dark Mode ///
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    console.log("71 .....");
    document.documentElement.classList.add('dark');
    radioBtnCheckedFunction(lightCheckBox, darkCheckBox);
  } else {
    console.log("75 .....");
    document.documentElement.classList.remove('dark');
    radioBtnCheckedFunction(darkCheckBox, lightCheckBox);
  }

  /// Fetch Layout (dark & rtl) ///
  if (localStorage.layout === 'rtl') {
    console.log("82 .....");
    document.body.setAttribute('dir', 'rtl');
    radioBtnCheckedFunction(ltrChecked, rtlChecked);
  } else {
    console.log("87 .....");
    document.body.setAttribute('dir', 'ltr');
    radioBtnCheckedFunction(rtlChecked, ltrChecked);
  }




  /// Sidebar Type (full & icon) ///
  if (localStorage.sidebarType === 'icon') {
    mainPageWrapper.classList.add('sidebar-close', 'sidebar-icon');
    radioBtnCheckedFunction(fullSidebarChecked, iconSidebarChecked);
  } else {
    mainPageWrapper.classList.remove('sidebar-close', 'sidebar-icon');
    radioBtnCheckedFunction(iconSidebarChecked, fullSidebarChecked);
  }
});

/*========= All Settings ===========*/

/// Light Mode Function ///
const lightMode = function () {
  theme = 'light';
  document.documentElement.classList.remove('dark');
  radioBtnCheckedFunction(darkCheckBox, lightCheckBox);
};

/// Dark Mode Function
const darkMode = function () {
  theme = 'dark';
  document.documentElement.classList.add('dark');
  radioBtnCheckedFunction(lightCheckBox, darkCheckBox);
};

/// Ltr Layout Function ///
const ltrLayout = function () {
  layout = 'ltr';
  document.body.setAttribute('dir', 'ltr');
  radioBtnCheckedFunction(rtlChecked, ltrChecked);

};

/// Rtl Layout Function ///
const rtlLayout = function () {
  layout = 'rtl';
  document.body.setAttribute('dir', 'rtl');
  radioBtnCheckedFunction(ltrChecked, rtlChecked);
};

const fullSidebar = function () {
  console.log("full sidebar");
  sidebarType = 'full';
  mainPageWrapper.classList.remove('sidebar-close', 'sidebar-icon');
  // mainPageWrapper.classList.remove('sidebar-close', 'sidebar-icon');
  radioBtnCheckedFunction(iconSidebarChecked, fullSidebarChecked);
};
const iconSidebar = function () {
  console.log("icon sidebar");
  sidebarType = 'icon';
  mainPageWrapper.classList.add('sidebar-close', 'sidebar-icon');
  radioBtnCheckedFunction(fullSidebarChecked, iconSidebarChecked);
};

/// Monochrome Mode ///
const monochromeModeFunction = function () {
  console.log("call 159");
  localStorage.setItem('monochrome', true);
  document.body.classList.add('monochrome-mode');
};

/*========= All Resets Functions ===========*/

/// Reset Theme ///
const themeResetFunction = function () {
  theme = '';
  document.documentElement.classList.remove('dark');
  radioBtnCheckedFunction(darkCheckBox, lightCheckBox);
};

/// Reset Layout ///
const layoutResetFunction = function () {
  layout = 'ltr';
  document.body.setAttribute('dir', 'ltr');
  radioBtnCheckedFunction(rtlChecked, ltrChecked);
};

/// Reset Monochrome Mode ///
const resetMonochromeModeFunction = function () {
  console.log("183 ..............");
  // monochrome = false;
  monochromeSwitch.checked = false;
  localStorage.setItem('monochrome', false);
  document.body.classList.remove('monochrome-mode');
};

const resetSidebarType = function () {
  console.log("reset fun call");
  sidebarType = '';
  mainPageWrapper.classList.remove('sidebar-close', 'sidebar-icon');
  radioBtnCheckedFunction(iconSidebarChecked, fullSidebarChecked);
};

/*========= All Trigger Events ===========*/

/// Monochrome Mode Trigger ///
monochromeSwitch.addEventListener('change', function () {
  this.checked ? monochromeModeFunction() : resetMonochromeModeFunction();
});

/// Dark And Rtl Mode Trigger ///
const darkThemeFunction = function () {
  if (theme === 'dark') {
    lightMode();
  } else {
    darkMode();
  }
};

/// Header Dark Toggle Btn ///
const themeToggleBtn = document.getElementById('dark-mode');
themeToggleBtn?.addEventListener('click', darkThemeFunction);
const modeEvent = document.querySelector('.mode-event');

/* This is an event listener that is listening for a click event. When the click event is fired,
it will check to see if the event target is the closest to the class names that are listed. If it
is,
it will call the function that is associated with the class name. */
/// SideBar Customizer Events ///
modeEvent.addEventListener('click', function (event) {
  const lightModeBtn = event.target.closest('.mode-theme-light');
  const darkModeBtn = event.target.closest('.mode-theme-dark');
  const RtlLayoutBtn = event.target.closest('.layout-rtl');
  const LtrLayoutBtn = event.target.closest('.layout-ltr');
  const fullSidebarEl = event.target.closest('.sidebar-full');
  const iconSidebarEl = event.target.closest('.sidebar-icon');
  if (!lightModeBtn && !darkModeBtn && !RtlLayoutBtn && !LtrLayoutBtn && !fullSidebarEl && !iconSidebarEl) return;

  if (lightModeBtn) {
    lightMode();
  }
  if (darkModeBtn) {
    darkMode();
  }
  if (LtrLayoutBtn) {
    ltrLayout();
  }
  if (RtlLayoutBtn) {
    rtlLayout();
  }
  if (fullSidebarEl) {
    fullSidebar();
  }
  else if (iconSidebarEl) {
    iconSidebar();
  }
});

/// Reset Customizer ///

/* This is an event listener that is listening for a click event. When the click event is fired,
it will call the functions that are listed. */
reseteCustomizer.addEventListener('click', function () {
  themeResetFunction();
  layoutResetFunction();
  resetMonochromeModeFunction();
  resetSidebarType();
});

/// Set Local Storage ///
/* This is an event listener that is listening for a beforeunload event. When the beforeunload
event is fired, it will set the local storage to the values that are listed. */
window.addEventListener('beforeunload', function () {
  console.log("call 262");
  localStorage.theme = theme;
  localStorage.layout = layout;
  // localStorage.monochrome = monochrome;
  // localStorage.monochrome = monochrome;
  localStorage.sidebarType = sidebarType;
  window.location.pathname.includes('rtl.html') && (localStorage.removeItem('layout'))
  // window.location.pathname.includes('dark-layout.html') && (localStorage.removeItem('theme'))
});
