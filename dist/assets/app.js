;(() => {
  var e,
    t = {
      1256: (e, t, a) => {
        'use strict'
        var n = a(5191),
          o = 1024,
          r = 768,
          i = window.matchMedia('(min-width: '.concat(o, 'px)')),
          c = window.matchMedia('(min-width: '.concat(r, 'px)'))
        function l(e) {
          var t = document.querySelector(e)
          if (t) {
            if (t.querySelectorAll('.swiper-slide').length > 1) return !0
            var a = document.querySelector('[data-slider-buttons]')
            if (a) return a.classList.add('hidden'), !1
          }
        }
        function s(e, t) {
          var a = document.querySelector(e)
          if (a && a.querySelectorAll('.swiper-slide').length < 3) {
            var n = document.querySelector(
              '[data-slider-buttons='.concat(t, ']')
            )
            n && n.classList.add('hidden')
          }
        }
        var d = function () {
            document.querySelectorAll('[data-drop]').forEach(function (e) {
              var t = e.querySelector('[data-drop-btn]'),
                a = { isOpen: !1 },
                n = 'BTN_CLICK',
                o = 'CLICK_OUTSIDE'
              window.addEventListener('click', function (r) {
                !(function (t) {
                  switch (t) {
                    case n:
                      e.classList.toggle('drop--open'), (a.isOpen = !a.isOpen)
                      break
                    case o:
                      e.classList.remove('drop--open'), (a.isOpen = !1)
                  }
                })(
                  (function (e) {
                    var a = e.closest('[data-drop-btn]')
                    return !!a && a === t
                  })(r.target)
                    ? n
                    : o
                )
              })
            })
          },
          u = a(7386),
          f = (a(4563), a(8917), a(5638))
        function p(e, t) {
          var a = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              a.push.apply(a, n)
          }
          return a
        }
        function m(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? p(Object(a), !0).forEach(function (t) {
                  v(e, t, a[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : p(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  )
                })
          }
          return e
        }
        function v(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          )
        }
        var h = {
          closeExisting: !0,
          touch: !1,
          hideScrollbar: !1,
          autoFocus: !1,
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',
          animationEffect: 'zoom',
          animationDuration: 400,
          afterShow: function (e, t) {
            f(t.src).closest('.fancybox-container').addClass('open')
          },
        }
        f(function () {
          f('[data-fancy-button]').on('click', function (e) {
            var t = m({}, h)
            e.preventDefault()
            var a = f(this).data('fancy-button'),
              n = f('[data-fancy-modal="'.concat(a, '"]'))
            switch (a) {
              case 'size':
              case 'contacts':
              case 'callback':
              case 'popular':
              case 'type':
              case 'premium':
              case 'order':
              case 'production':
              case 'partners':
                t.animationEffect = 'right'
                break
              case 'cities':
                if (i.matches) return
                t.animationEffect = 'right'
                break
              case 'menu':
                ;(t.animationEffect = 'top'), (t.baseClass = 'menu-layout')
                break
              case 'search':
                t.animationEffect = 'top'
                break
              case 'collections':
                t.animationEffect = 'left'
            }
            ;(f.fancybox.defaults = m(m({}, f.fancybox.defaults), t)),
              f.fancybox.open(n)
          })
        })
        a(3419)
        var y = a(5638)
        function g(e, t) {
          var a = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              a.push.apply(a, n)
          }
          return a
        }
        function b(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? g(Object(a), !0).forEach(function (t) {
                  w(e, t, a[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : g(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  )
                })
          }
          return e
        }
        function w(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          )
        }
        var S = function (e) {
            var t = document.querySelectorAll('['.concat(e, '-panel]'))
            t.length &&
              t.forEach(function (t) {
                t.addEventListener('click', function (a) {
                  function n(a) {
                    if (a.target.closest('[data-main-tabs]')) {
                      var n = a.target.closest('['.concat(e, ']'))
                      if (n) {
                        var o = t.querySelector('.active['.concat(e, ']')),
                          r = t.getAttribute(''.concat(e, '-panel')),
                          i = n.getAttribute(''.concat(e)),
                          c = document.querySelectorAll(
                            '['
                              .concat(e, "-content-container='")
                              .concat(r, "']")
                          )
                        o &&
                          document
                            .querySelectorAll(
                              '['.concat(e, "-panel='").concat(r, "']")
                            )
                            .forEach(function (t) {
                              t.querySelector(
                                '.active['.concat(e, ']')
                              ).classList.remove('active')
                            }),
                          document
                            .querySelectorAll(
                              '['.concat(e, "-panel='").concat(r, "']")
                            )
                            .forEach(function (t) {
                              t.querySelector(
                                '['.concat(e, '="').concat(i, '"]')
                              ).classList.add('active')
                            }),
                          c.forEach(function (t) {
                            if (t.closest('.options-contents__item')) {
                              if (t.closest('.options-contents__item.active')) {
                                if (o) {
                                  var a = o.getAttribute(''.concat(e))
                                  t.querySelector(
                                    '['.concat(e, "-content='").concat(a, "']")
                                  ).classList.remove('active')
                                }
                                t.querySelector(
                                  '['.concat(e, "-content='").concat(i, "']")
                                ).classList.add('active')
                              }
                            } else {
                              if (o) {
                                var n = o.getAttribute(''.concat(e))
                                t.querySelector(
                                  '['.concat(e, "-content='").concat(n, "']")
                                ).classList.remove('active')
                              }
                              t.querySelector(
                                '['.concat(e, "-content='").concat(i, "']")
                              ).classList.add('active')
                            }
                          })
                      }
                    } else {
                      var l = a.target.closest('['.concat(e, ']'))
                      if (l) {
                        var s = t.querySelector('.active['.concat(e, ']')),
                          d = t.getAttribute(''.concat(e, '-panel')),
                          u = l.getAttribute(''.concat(e)),
                          f = document.querySelectorAll(
                            '['
                              .concat(e, "-content-container='")
                              .concat(d, "']")
                          )
                        s && s.classList.remove('active'),
                          l.classList.add('active'),
                          f.forEach(function (t) {
                            if (t.closest('.options-contents__item')) {
                              if (t.closest('.options-contents__item.active')) {
                                if (s) {
                                  var a = s.getAttribute(''.concat(e))
                                  t.querySelector(
                                    '['.concat(e, "-content='").concat(a, "']")
                                  ).classList.remove('active')
                                }
                                t.querySelector(
                                  '['.concat(e, "-content='").concat(u, "']")
                                ).classList.add('active')
                              }
                            } else {
                              if (s) {
                                var n = s.getAttribute(''.concat(e))
                                t.querySelector(
                                  '['.concat(e, "-content='").concat(n, "']")
                                ).classList.remove('active')
                              }
                              t.querySelector(
                                '['.concat(e, "-content='").concat(u, "']")
                              ).classList.add('active')
                            }
                          })
                      }
                    }
                  }
                  t.closest('.options-contents__item')
                    ? t.closest('.options-contents__item.active') && n(a)
                    : n(a)
                })
              })
          },
          q = a(5638)
        var E = a(4145)
        a(527)
        function L() {
          return i.matches ? 'mouseenter focus' : 'click'
        }
        function k(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var x = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.menu = document.querySelector(t)),
              (this.count = 0),
              (this.status = document.querySelector('[data-menu-status]')),
              (this.resetBtn = document.querySelector('[data-menu-btn=reset]')),
              (this.ranges = this.menu.querySelectorAll('[data-range-range]')),
              (this.types = this.menu.querySelectorAll('[data-filter-type]')),
              this.init()
          }
          var t, a, n
          return (
            (t = e),
            (a = [
              {
                key: 'init',
                value: function () {
                  this.menuHandlers(), this.touchHandlers()
                },
              },
              {
                key: 'menuHandlers',
                value: function () {
                  var e = this
                  document
                    .querySelectorAll('[data-menu-btn]')
                    .forEach(function (t) {
                      var a = t.getAttribute('data-menu-btn'),
                        n = t.getAttribute('data-modal-id')
                      t.onclick = function () {
                        e[a](n)
                      }
                    }),
                    this.types.forEach(function (t) {
                      t.onchange = function () {
                        t.checked
                          ? (t.classList.add('active'), e.count++)
                          : (t.classList.remove('active'), e.count--)
                      }
                    })
                },
              },
              {
                key: 'touchHandlers',
                value: function () {
                  var e = this,
                    t = 0
                  this.menu.addEventListener('touchstart', function (e) {
                    t = e.changedTouches[0].screenX
                  }),
                    this.menu.addEventListener('touchend', function (a) {
                      a.target.closest('[data-range]') ||
                        (a.changedTouches[0].screenX > t && e.close())
                    })
                },
              },
              {
                key: 'close',
                value: function () {
                  this.menu.classList.remove('active'),
                    document.body.classList.remove('body--hidden')
                },
              },
              {
                key: 'open',
                value: function () {
                  this.menu.classList.add('active'),
                    document.body.classList.add('body--hidden')
                },
              },
              {
                key: 'accept',
                value: function () {
                  this.checkRanges(),
                    this.count
                      ? (this.status.classList.add('active'),
                        this.resetBtn.classList.remove('hidden'))
                      : (this.status.classList.remove('active'),
                        this.resetBtn.classList.add('hidden')),
                    this.close()
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.menu
                    .querySelectorAll('[data-modal-id].active')
                    .forEach(function (e) {
                      e.classList.remove('active')
                    }),
                    this.ranges.forEach(function (e) {
                      e.noUiSlider.reset()
                    }),
                    this.types.forEach(function (e) {
                      e.checked = !1
                    }),
                    (this.count = 0),
                    this.status.classList.remove('active'),
                    this.resetBtn.classList.add('hidden')
                },
              },
              {
                key: 'openModal',
                value: function (e) {
                  this.menu
                    .querySelector('[data-menu-modal="'.concat(e, '"]'))
                    .classList.add('active')
                },
              },
              {
                key: 'closeModal',
                value: function () {
                  this.menu
                    .querySelector('[data-menu-modal].active')
                    .classList.remove('active')
                },
              },
              {
                key: 'checkRanges',
                value: function () {
                  var e = this
                  this.menu
                    .querySelectorAll('[data-range]')
                    .forEach(function (t) {
                      var a = t
                          .querySelector('[data-range-from]')
                          .getAttribute('data-range-from'),
                        n = t
                          .querySelector('[data-range-to]')
                          .getAttribute('data-range-to'),
                        o = t
                          .querySelector('[data-range-range]')
                          .noUiSlider.get()
                      ;(+a === e.getNumber(o[0]) && +n === e.getNumber(o[1])) ||
                        e.count++
                    })
                },
              },
              {
                key: 'getNumber',
                value: function (e) {
                  return +e.replace(' ', '')
                },
              },
            ]) && k(t.prototype, a),
            n && k(t, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('[data-catalog-menu]') &&
            new x('[data-catalog-menu]')
        })
        var O = a(9344),
          _ = a.n(O),
          A = a(3655),
          T = a.n(A)
        function P() {
          var e = document.querySelectorAll('[data-range]')
          e.length &&
            (e.forEach(function (e) {
              var t = e.querySelector('[data-range-range]'),
                a = e.querySelector('[data-range-from]'),
                n = e.querySelector('[data-range-to]'),
                o = a.getAttribute('data-range-from'),
                r = n.getAttribute('data-range-to'),
                i = t.getAttribute('data-range-min'),
                c = t.getAttribute('data-range-max')
              ;(t && t.noUiSlider) ||
                (_().create(t, {
                  start: [o, r],
                  connect: !0,
                  behaviour: 'none',
                  range: { min: +i, max: +c },
                  format: T()({ decimals: 0, thousand: ' ' }),
                }),
                t.noUiSlider.on('update', function (e, t) {
                  var o = e[t]
                  t ? (n.value = o) : (a.value = o)
                }),
                t.noUiSlider.on('change', function (e, t) {
                  t
                    ? n.dispatchEvent(new Event('change', { bubbles: !0 }))
                    : a.dispatchEvent(new Event('change', { bubbles: !0 }))
                }),
                a.addEventListener('change', function () {
                  t.noUiSlider.set([this.value, null])
                }),
                n.addEventListener('change', function () {
                  t.noUiSlider.set([null, this.value])
                }))
            }),
            window.addEventListener('click', function (e) {
              if (e.target.closest('[data-range]')) {
                var t = document.querySelectorAll('[data-range-input-block]'),
                  a = e.target.closest('[data-range-input-block]')
                a &&
                  (t.forEach(function (e) {
                    e.classList.remove('active')
                  }),
                  a.querySelector('input').focus(),
                  a.classList.add('active'))
              } else document.querySelector('[data-range-input-block].active') && document.querySelector('[data-range-input-block].active').classList.remove('active')
            }))
        }
        a(5638)(function () {
          P()
        }),
          document.addEventListener('DOMContentLoaded', function () {
            P()
          })
        var j = a(5440),
          C = a(5638)
        function D(e, t) {
          var a = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              a.push.apply(a, n)
          }
          return a
        }
        function H(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? D(Object(a), !0).forEach(function (t) {
                  M(e, t, a[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : D(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  )
                })
          }
          return e
        }
        function M(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          )
        }
        var I = 1024
        C(window).on('load', function () {
          var e = C('[data-slider-id]')
          0 !== e.length &&
            e.each(function () {
              var e = C(this),
                t = e.data('slider-id'),
                a = e.find('.swiper-slide'),
                n = e.data('slider-min'),
                o = {
                  slidesPerView: 'auto',
                  spaceBetween: 8,
                  loop: !0,
                  breakpoints: M({}, I, { spaceBetween: 12 }),
                }
              switch (t) {
                case 10:
                  o = {
                    pagination: { el: '.swiper-pagination' },
                    breakpoints: M({}, I, { pagination: !1 }),
                  }
                  break
                case 2:
                  o = H(
                    H({}, o),
                    {},
                    { breakpoints: M({}, I, { slidesPerView: 2 }) }
                  )
                  break
                case 1:
                  o = H({}, o)
              }
              var r = e.data('slider-prev'),
                i = e.data('slider-next'),
                c = C('[data-slider-button="'.concat(r, '"]')),
                l = C('[data-slider-button="'.concat(i, '"]'))
              if (n >= a.length)
                c.closest('[data-slider-buttons]').addClass('hidden')
              else {
                var s = new j.Z(e[0], o)
                c.on('click', function () {
                  s.slidePrev()
                }),
                  l.on('click', function () {
                    s.slideNext()
                  })
              }
            })
        })
        a(9490)
        var F = a(5638)
        function N(e, t) {
          var a = e.term
          if ('' === F.trim(e.term)) return t
          if (void 0 === t.text) return null
          if (!a.match(/^[а-яё]/i)) return t
          var n = new RegExp('^'.concat(a), 'i')
          return t.text.match(n) ? t : null
        }
        F(function () {
          F('.select__select').each(function () {
            var e = F(this),
              t = e.closest('.select-wrapper'),
              a = getComputedStyle(t[0]),
              n = e.data('select-placeholder'),
              o = e.is('[data-select-search]')
            'static' === a.position && t.css('position', 'relative')
            var r = {
              dropdownParent: t,
              selectOnClose: !0,
              placeholder: n,
              language: {
                noResults: function () {
                  return 'Подходящих городов нет'
                },
              },
            }
            o ? (r.matcher = N) : (r.minimumResultsForSearch = 1 / 0),
              e.select2(r),
              e.on('select2:open', function (a) {
                t.css('z-index', '100000')
                var n = t.find('.select2-dropdown')
                if ((n.addClass('open'), o)) {
                  var r = n.find('.select2-search__field'),
                    c = e.data('select-search')
                  r.val(''), r.attr('placeholder', c)
                }
                e.on('select2:closing', i)
              })
            var i = function (a) {
              a.preventDefault(),
                t.css('pointer-events', 'none'),
                e.off('select2:closing'),
                t.find('.select2-dropdown').removeClass('open')
              var n = t.find('.select2')
              n.addClass('closing'),
                n.removeClass('select2-container--open'),
                setTimeout(function () {
                  t.css('pointer-events', ''),
                    n.addClass('select2-container--open'),
                    setTimeout(function () {
                      e.select2('close')
                    })
                }, 400)
            }
          })
        })
        a(1044), a(9135)
        function R(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var U = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.root = t),
              (this.select = this.root.querySelector('[data-select-select]')),
              (this.options = this.select.options),
              (this.selected = this.root.querySelector(
                '[data-select-selected]'
              )),
              (this.list = this.root.querySelector('[data-select-list]')),
              (this.dropdown = this.root.querySelector(
                '[data-select-dropdown]'
              )),
              this.initSelect(),
              this.clickHandler()
          }
          var t, a, n
          return (
            (t = e),
            (a = [
              {
                key: 'initSelect',
                value: function () {
                  ;(this.selected.textContent = this.options[0].textContent),
                    this.renderOptions()
                },
              },
              {
                key: 'clickHandler',
                value: function () {
                  var e = this
                  window.addEventListener('click', function (t) {
                    var a = t.target
                    if (a.closest('[data-select-button]'))
                      if (e.root.classList.contains('active'))
                        e.root.classList.remove('active'),
                          (e.dropdown.style.maxHeight = '0')
                      else {
                        var n = e.list.offsetHeight
                        e.root.classList.add('active'),
                          (e.dropdown.style.maxHeight = ''.concat(n, 'px'))
                      }
                    if (a.closest('[data-select-option]')) {
                      var o = a.textContent
                      ;(e.selected.textContent = o),
                        e.root.classList.remove('active'),
                        (e.dropdown.style.maxHeight = '0'),
                        (e.select.value = o),
                        e.select.dispatchEvent(new Event('change')),
                        e.dropdown.addEventListener(
                          'transitionend',
                          function () {
                            ;(e.list.innerHTML = ''), e.renderOptions()
                          },
                          { once: !0 }
                        )
                    }
                    e.root.classList.contains('active') &&
                      (a.closest('.custom-select') ||
                        (e.root.classList.remove('active'),
                        (e.dropdown.style.maxHeight = '0')))
                  })
                },
              },
              {
                key: 'renderOptions',
                value: function () {
                  for (var e = 0; e < this.options.length; e++)
                    if (
                      this.selected.textContent !== this.options[e].textContent
                    ) {
                      var t = document.createElement('li')
                      t.classList.add('custom-select__item'),
                        t.setAttribute('data-select-option', ''),
                        (t.textContent = this.options[e].textContent),
                        this.list.append(t)
                    }
                },
              },
            ]) && R(t.prototype, a),
            n && R(t, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelectorAll('[data-select]')
          e.length &&
            e.forEach(function (e) {
              new U(e)
            })
        })
        var B = a(5638)
        function G(e, t) {
          var a = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              a.push.apply(a, n)
          }
          return a
        }
        function z(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? G(Object(a), !0).forEach(function (t) {
                  Q(e, t, a[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : G(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  )
                })
          }
          return e
        }
        function Q(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          )
        }
        function Z(e, t) {
          t && e.geoObjects.removeAll()
          var a = ymaps.templateLayoutFactory.createClass(
              '<div class="balloon__content balloon__content_cluster">$[properties.balloon]</div>'
            ),
            n = new ymaps.Clusterer({
              clusterIconLayout: ymaps.templateLayoutFactory.createClass(
                '<div class="cluster">{{ properties.geoObjects.length }}</div>'
              ),
              clusterBalloonItemContentLayout: a,
              clusterBalloonContentLayout: 'cluster#balloonCarousel',
              hideIconOnBalloonOpen: !1,
              clusterIconShape: {
                type: 'Rectangle',
                coordinates: [
                  [0, 0],
                  [50, 50],
                ],
              },
            })
          n.events.add(['balloonopen'], function (e) {
            n.getClusters()[0]
              .getGeoObjects()
              .forEach(function (e) {
                var t = e.properties._data,
                  a = document.createElement('div')
                a.innerHTML = t.balloon
                var n = a.querySelector('.buy-page__title').textContent
                document
                  .querySelectorAll('[data-placemark]')
                  .forEach(function (e) {
                    e.querySelector('.buy-page__title').textContent === n &&
                      e.classList.add('active')
                  })
              })
          }),
            n.events.add(['balloonclose'], function (e) {
              document
                .querySelectorAll('[data-placemark].active')
                .forEach(function (e) {
                  e.classList.remove('active')
                })
            })
          var o = ymaps.templateLayoutFactory.createClass(
              [
                '<div class="balloon">',
                '<div class="balloon__content">',
                '$[properties.balloon]',
                '</div>',
                '<div class="balloon__close"></div>',
                '<div class="balloon__arrow"></div>',
                '</div>',
              ].join(''),
              {
                build: function () {
                  this.constructor.superclass.build.call(this),
                    (this._$element = B('.balloon', this.getParentElement())),
                    this._$element
                      .find('.balloon__close')
                      .bind('click', this.onCloseClick),
                    this.applyElementOffset()
                },
                onSublayoutSizeChange: function () {
                  o.superclass.onSublayoutSizeChange.apply(this, arguments),
                    this._isElement(this._$element) &&
                      (this.applyElementOffset(),
                      this.events.fire('shapechange'))
                },
                applyElementOffset: function () {
                  this._$element.css({
                    left: -this._$element[0].offsetWidth / 2,
                    top: -(this._$element[0].offsetHeight + 38 + 4),
                  })
                },
                getShape: function () {
                  if (!this._isElement(this._$element))
                    return o.superclass.getShape.call(this)
                  var e = this._$element.position()
                  return new ymaps.shape.Rectangle(
                    new ymaps.geometry.pixel.Rectangle([
                      [e.left, e.top],
                      [
                        e.left + this._$element[0].offsetWidth,
                        e.top + this._$element[0].offsetHeight,
                      ],
                    ])
                  )
                },
                onCloseClick: function () {
                  e.balloon.close()
                },
                _isElement: function (e) {
                  return e && e[0]
                },
              }
            ),
            r = [],
            c = [],
            l = B('[data-placemarks]'),
            s = B('[data-placemark]')
          B('[data-placemark]').each(function () {
            c.push(ymaps.geocode(B(this).data('placemark').trim()))
          }),
            Promise.all(c).then(function (t) {
              t.forEach(function (t, a) {
                var c = s.eq(a).html(),
                  d = s.eq(a).data('store-type'),
                  u = s.eq(a).data('placemark-exposition')
                if (u) {
                  var f = (function (e) {
                    var t = B(document.createElement('div')),
                      a = []
                    e.forEach(function (e) {
                      var t = '<a href="'
                        .concat(
                          e.link,
                          '" target="_blank" class="buy-page__exposition-item">'
                        )
                        .concat(e.name, '</a>')
                      a.push(t)
                    })
                    var n = [
                      '<div class="buy-page__exposition">',
                      '<div class="buy-page__exposition-container">',
                      '<div class="buy-page__exposition-title">',
                      'Экспозиция',
                      '</div>',
                      '<div class="buy-page__exposition-list">',
                      ''.concat(a.join('')),
                      '</div>',
                      '</div>',
                      '</div>',
                    ].join('')
                    return t.html(n), t.html()
                  })(u)
                  c += f
                }
                var p = t.geoObjects.get(0).geometry.getCoordinates(),
                  m = new ymaps.Placemark(
                    p,
                    { balloon: c },
                    {
                      iconLayout: 'default#image',
                      iconImageHref: ''
                        .concat(
                          window.CONFIG.path,
                          '/assets/images/svg/placemark-'
                        )
                        .concat(d, '.svg'),
                      iconImageSize: [38, 38],
                      iconImageOffset: [-19, -19],
                      balloonLayout: o,
                      balloonPanelMaxMapArea: 0,
                      hideIconOnBalloonOpen: !1,
                    }
                  )
                m.events.add(['click'], function () {
                  if (i.matches) {
                    var e = s.eq(a)[0].offsetTop
                    l.scrollTop(e + 1)
                  } else {
                    var t = document.querySelector('[data-placemark-modal]')
                    t.querySelector('[data-placemark-container]').innerHTML = c
                    var n = z(z({}, h), {}, { animationEffect: 'right' })
                    ;(B.fancybox.defaults = z(z({}, B.fancybox.defaults), n)),
                      B.fancybox.open(B(t))
                  }
                }),
                  m.events.add(['balloonopen'], function () {
                    s.eq(a).addClass('active')
                  }),
                  m.events.add(['balloonclose'], function () {
                    s.eq(a).removeClass('active')
                  }),
                  i.matches &&
                    s.eq(a).on('click', function () {
                      m.getParent() || e.setCenter(p, 16)
                      try {
                        m.balloon.open()
                      } catch (e) {
                        var t = (function (e, t) {
                          for (
                            var a, n = t.getClusters(), o = 0;
                            o < n.length;
                            o++
                          )
                            for (
                              var r = n[o].getGeoObjects(), i = 0;
                              i < r.length;
                              i++
                            )
                              if (r[i] === e) {
                                a = n[o]
                                break
                              }
                          return a
                        })(m, n)
                        n.balloon.open(t)
                      }
                    }),
                  r.push(m)
              }),
                n.add(r),
                e.geoObjects.add(n),
                e
                  .setBounds(n.getBounds(), { zoomMargin: Math.max(38, 38) })
                  .then(function () {
                    1 === r.length && e.setZoom(15)
                  })
            })
        }
        B(function () {
          if (B('#map').length) {
            try {
              ymaps.ready(function () {
                var e = B('#map').data('map-center').split(' '),
                  t = new ymaps.Map(
                    'map',
                    { center: e, zoom: 15, controls: [] },
                    { maxZoom: 22 }
                  )
                Z(t),
                  t.events.add('click', function () {
                    t.balloon.isOpen() && t.balloon.close()
                  }),
                  (B('#map')[0].YMap = t)
              })
            } catch (e) {
              console.error(e)
            }
            var e = document.querySelector('[data-partners-btn]'),
              t = document
                .querySelector('[data-partners-select]')
                .querySelector('.select2-selection__placeholder')
            e.onclick = function () {
              var e = this.closest('[data-fancy-modal]'),
                a = e.querySelectorAll('[data-partners-item]'),
                n = []
              a.forEach(function (e) {
                if (e.querySelector('[data-partners-checkbox]').checked) {
                  var t = e.querySelector('[data-partners-type]').textContent
                  n.push(t)
                }
              })
              var o = n.length ? n.join(', ') : 'тип партнера'
              ;(t.textContent = o), B.fancybox.close(B(e))
            }
          }
        })
        var $ = a(1597)
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelectorAll('[data-gallery]')
          if (e.length) {
            var t, a
            c.matches
              ? ((t = 450), (a = 634))
              : ((t = 0.6 * window.innerWidth), (a = 0.8 * window.innerHeight))
            var n = []
            e.forEach(function (e) {
              var o = e.querySelector('img')
              n.push({ src: o.src, type: 'image', width: t, height: a })
            }),
              window.addEventListener('click', function (e) {
                var t = e.target.closest('[data-gallery]')
                if (t) {
                  var a = t.dataset.gallery
                  $.KR.show(n, { startIndex: a })
                }
              })
          }
        }),
          document.addEventListener('DOMContentLoaded', function () {
            var e,
              t,
              a = document.querySelectorAll('[data-fancybox-video]')
            a.length &&
              (i.matches
                ? ((e = 0.71 * window.innerWidth),
                  (t = 0.7 * window.innerHeight))
                : (e = window.innerWidth - 30),
              a.forEach(function (a) {
                var n = a.getAttribute('data-fancybox-video')
                a.addEventListener('click', function () {
                  $.KR.show([{ src: n, type: 'video', width: e, height: t }], {
                    mainClass: 'video-modal',
                  })
                })
              }))
          })
        var W = a(5638)
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelector('.cities-modal')
          if (e && !i.matches) {
            var t = e.querySelector('[data-cities-input]'),
              a = e.querySelectorAll('[data-cities-item]')
            t.addEventListener('input', function () {
              var e = new RegExp('^'.concat(this.value), 'i')
              a.forEach(function (t) {
                t.textContent.match(e)
                  ? t.classList.remove('hidden')
                  : t.classList.add('hidden')
              })
            })
            var n = document
              .querySelector('[data-fancy-button="cities"]')
              .querySelector('.select__select')
            a.forEach(function (t) {
              t.addEventListener('click', function () {
                var t = this.getAttribute('data-cities-item')
                W(n).val(t).trigger('change'), W.fancybox.close(e)
              })
            })
          }
        })
        var V = a(5566),
          Y = a.n(V)
        function K(e, t) {
          var a = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              a.push.apply(a, n)
          }
          return a
        }
        function X(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? K(Object(a), !0).forEach(function (t) {
                  J(e, t, a[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : K(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  )
                })
          }
          return e
        }
        function J(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          )
        }
        function ee(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        var te = (function () {
            function e(t, a) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
                (this.root = t),
                (this.options = X(
                  { start: 1, end: 1 / 0, offset: 1, speed: 2 },
                  a
                )),
                this.scrollHandler()
            }
            var t, a, n
            return (
              (t = e),
              (a = [
                {
                  key: 'scrollHandler',
                  value: function () {
                    var e = this
                    window.addEventListener('scroll', function () {
                      e.update()
                    })
                  },
                },
                {
                  key: 'getParallax',
                  value: function (e) {
                    return (e / 10) * this.options.speed
                  },
                },
                {
                  key: 'setParallax',
                  value: function (e) {
                    var t = this
                    requestAnimationFrame(function () {
                      t.root.style.transform = 'translateY('.concat(e, 'px)')
                    })
                  },
                },
                {
                  key: 'update',
                  value: function () {
                    var e = window.scrollY
                    if (e > this.options.start && e < this.options.end) {
                      var t = e - this.options.start + this.options.offset
                      this.setParallax(this.getParallax(t))
                    }
                  },
                },
                {
                  key: 'updateOptions',
                  value: function (e) {
                    this.options = X(X({}, this.options), e)
                  },
                },
                {
                  key: 'onResize',
                  value: function (e) {
                    var t = document.body
                    new MutationObserver(e).observe(t, {
                      attributes: !0,
                      childList: !0,
                      subtree: !0,
                    })
                  },
                },
              ]) && ee(t.prototype, a),
              n && ee(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e
            )
          })(),
          ae = a(3412),
          ne = a(7371),
          oe = a(7369),
          re = a(6383)
        a(4109)
        ;(0, re.ScrollMagicPluginGsap)(ae, ne.Q3, oe.b_),
          (ne.Q3.defaultOverwrite = !1)
        function ie(e, t, a, n, o) {
          for (var r = 0; r < t.length; r++)
            o[r] = new ae.Scene({
              triggerElement: e,
              duration: n.offsetHeight,
              offset:
                ((i = '[data-color-block="'.concat(r, '"]')),
                document.documentElement.clientHeight -
                  document.querySelector(i).getBoundingClientRect().bottom),
              triggerHook: 1,
            })
              .setClassToggle('[data-color-block="'.concat(r, '"]'), 'dark')
              .addTo(a)
          var i
        }
        var ce = function () {
          var e
          !(function () {
            var e = document.querySelector('[data-scroll-about]')
            if (e) {
              var t = e.querySelectorAll('[data-scroll-section]'),
                a = t[0].offsetHeight / 2,
                n = new ae.Controller({ refreshInterval: 1 }),
                o = {}
              i.matches
                ? ((o.scale = 1.65), (o.top = '48%'))
                : ((o.scale = 1.33), (o.top = '36%'))
              var r = document.querySelector('[data-scroll-first]')
              if (r) {
                var c = window.innerHeight - r.offsetHeight,
                  l = new oe.b_(),
                  s = r.querySelector('[data-scroll-wrapper]')
                i.matches &&
                  l.add(
                    ne.Q3.fromTo(
                      s,
                      1,
                      { y: '0%' },
                      { y: '25%', ease: 'linear', immediateRender: !1 }
                    )
                  ),
                  l.add(
                    ne.Q3.fromTo(
                      r.querySelector('[data-scroll-overlay]'),
                      1,
                      { opacity: '0' },
                      { opacity: '0.2', immediateRender: !1 }
                    ),
                    0
                  )
                var d = new ae.Scene({
                    triggerElement: e,
                    duration: a,
                    triggerHook: 1,
                    offset: c,
                  })
                    .setTween(l)
                    .addTo(n),
                  u = new oe.b_()
                u.add(
                  ne.Q3.fromTo(
                    r.querySelector('[data-scroll-overlay]'),
                    { opacity: '0.2' },
                    { opacity: '0.5', ease: 'linear', immediateRender: !1 }
                  ),
                  0
                ),
                  new ae.Scene({
                    triggerElement: e,
                    duration: a,
                    triggerHook: 0.5,
                    offset: c,
                  })
                    .setClassToggle(s, 'fixed')
                    .setTween(u)
                    .addTo(n),
                  i.matches || d.setClassToggle(s, 'fixed')
              }
              t.forEach(function (e, r) {
                var c = e.querySelectorAll('[data-scroll-stone]'),
                  l = e.querySelector('[data-scroll-list]'),
                  s = e.querySelectorAll('[data-scroll-opacity]'),
                  d = e.querySelector('[data-scroll-scale]'),
                  u = new oe.b_()
                if (r) {
                  var f = t[r - 1].querySelector('[data-scroll-overlay]'),
                    p = new oe.b_(),
                    m = t[r - 1].querySelector('[data-scroll-wrapper]')
                  p.add(
                    ne.Q3.fromTo(
                      f,
                      1,
                      { opacity: '0' },
                      { opacity: '0.5', ease: 'linear', immediateRender: !1 }
                    ),
                    0
                  ),
                    new ae.Scene({
                      triggerElement: e,
                      duration: window.innerHeight,
                      triggerHook: 1,
                    })
                      .setClassToggle(m, 'fixed')
                      .setTween(p)
                      .addTo(n)
                }
                var v = new oe.b_()
                c.forEach(function (e, t) {
                  var a
                  ;(a = i.matches
                    ? e.dataset.scrollStone.split(',')
                    : e.dataset.scrollMobile.split(',')),
                    v.add(
                      ne.Q3.fromTo(
                        e,
                        1,
                        { bottom: '0%', rotate: '0deg' },
                        {
                          bottom: ''.concat(a[0], '%'),
                          rotate: '15deg',
                          immediateRender: !1,
                        }
                      ),
                      0
                    ),
                    u.add(
                      ne.Q3.fromTo(
                        e,
                        1,
                        { bottom: ''.concat(a[0], '%'), rotate: '15deg' },
                        {
                          bottom: ''.concat(a[1], '%'),
                          rotate: '30deg',
                          immediateRender: !1,
                        }
                      ),
                      0
                    ),
                    u.add(
                      ne.Q3.fromTo(
                        e,
                        1,
                        { bottom: ''.concat(a[1], '%'), rotate: '30deg' },
                        {
                          bottom: ''.concat(a[2], '%'),
                          rotate: '45deg',
                          immediateRender: !1,
                        }
                      ),
                      '>'
                    )
                }),
                  new ae.Scene({
                    triggerElement: e,
                    duration: a,
                    triggerHook: 0.5,
                  })
                    .setTween(v)
                    .addTo(n),
                  u.add(
                    ne.Q3.fromTo(
                      s,
                      1,
                      { opacity: 1 },
                      { opacity: 0, immediateRender: !1 }
                    ),
                    '<'
                  ),
                  u.add(
                    ne.Q3.fromTo(
                      d,
                      1,
                      { scale: 1 },
                      { scale: o.scale, immediateRender: !1 }
                    ),
                    '<'
                  ),
                  u.add(ne.Q3.to(l, 0.5, { top: o.top }), '<0.5'),
                  u.add(ne.Q3.to(c, 1, { bottom: '110%' }), '<'),
                  new ae.Scene({
                    triggerElement: e,
                    duration: 2 * a,
                    triggerHook: 0,
                  })
                    .setPin(e)
                    .setTween(u)
                    .addTo(n)
              })
            }
          })(),
            (e = document.querySelectorAll('[data-product-section]')),
            i.matches &&
              e.length &&
              e.forEach(function (e) {
                var t = e.querySelector('[data-small-slider]'),
                  a = e.querySelector('[data-product-overlay]'),
                  n = new ae.Controller({ refreshInterval: 1 }),
                  o = new oe.b_()
                o.add(ne.Q3.to(t, 1, { top: '13%', ease: 'linear' })),
                  o.add(
                    ne.Q3.fromTo(
                      a,
                      1,
                      { opacity: '0' },
                      { opacity: '0.2', ease: 'linear' }
                    ),
                    0
                  ),
                  new ae.Scene({
                    triggerElement: e,
                    duration: window.innerHeight,
                    triggerHook: 0,
                    offset: -32,
                  })
                    .setTween(o)
                    .setPin(e)
                    .addTo(n)
              }),
            i.matches &&
              document
                .querySelectorAll('[data-parallax]')
                .forEach(function (e) {
                  var t = e.getBoundingClientRect().top - window.innerHeight,
                    a = e.getBoundingClientRect().top + e.offsetHeight
                  new te(e, { start: t, end: a })
                }),
            (function () {
              var e = document.querySelector('#white-sec'),
                t = document.querySelector('#white-sec-mob')
              if (e || t) {
                var a = new ae.Controller(),
                  n = document.querySelectorAll('[data-color-block]')
                if (
                  (n.forEach(function (e, t) {
                    e.setAttribute('data-color-block', ''.concat(t))
                  }),
                  i.matches && e)
                ) {
                  var o = []
                  ie('#white-sec', n, a, e, o),
                    window.addEventListener('resize', function () {
                      o.forEach(function (e) {
                        e.destroy()
                      }),
                        setTimeout(function () {
                          ie('#white-sec', n, a, e, o)
                        }, 500)
                    })
                  var r = !0
                  window.addEventListener('paginationTrigger', function () {
                    r &&
                      ((r = !1),
                      o.forEach(function (e) {
                        e.destroy()
                      }),
                      setTimeout(function () {
                        ie('#white-sec', n, a, e, o), (r = !0)
                      }, 500))
                  })
                }
              }
            })(),
            Y().init({ once: !0, offset: 0, duration: 500 })
        }
        window.addEventListener('load', function () {
          document.body.classList.remove('body--notransition')
          var e = document.querySelector('.first-screen'),
            t = document.querySelector('.preloader')
          if (e) {
            var a = document.querySelector('.main-slider')
            t
              ? (document.body.classList.add('body--hidden'),
                t.classList.add('preloader--hidden'),
                a.classList.remove('main-slider--zoom-out'),
                setTimeout(function () {
                  document.body.classList.remove('body--hidden'),
                    window.scrollTo(0, 0),
                    a
                      .querySelector('.swiper-slide-active')
                      .classList.remove('text-out')
                }, 1100),
                setTimeout(function () {
                  ce()
                }, 1700))
              : (a.classList.remove('main-slider--zoom-out'),
                a.classList.add('main-slider--no-transition'),
                a
                  .querySelector('.swiper-slide-active')
                  .classList.remove('text-out'),
                ce())
          } else ce()
        })
        a(3053), a(685)
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelector('[data-blur-section]')
          e &&
            i.matches &&
            window.addEventListener('scroll', function () {
              var t = this.scrollY,
                a = (t / this.innerHeight) * 12
              t > this.innerHeight
                ? (e.style.backdropFilter = 'blur(12px)')
                : t < this.innerHeight &&
                  (e.style.backdropFilter = 'blur('.concat(a, 'px)'))
            })
        })
        a(2972)
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelector('[data-hover]')
          if (e && i.matches) {
            var t = null
            e.addEventListener('mouseover', function (e) {
              if (!t) {
                var a = e.target.closest('[data-hover-container]')
                if (a) {
                  var n = a.querySelector('[data-hover-img]')
                  n && (n.classList.add('active'), (t = a))
                }
              }
            }),
              e.addEventListener('mouseout', function (e) {
                t &&
                  (e.relatedTarget.closest('[data-hover-container]') ||
                    (t
                      .querySelector('[data-hover-img]')
                      .classList.remove('active'),
                    (t = null)))
              })
          }
        })
        var le = a(5638)
        function se(e, t) {
          e.each(function (e, a) {
            var n = le(a),
              o = n.data('fetch-response'),
              r = le(t).filter('[data-fetch-response='.concat(o, ']'))
            r.length ||
              (r = le(t).find('[data-fetch-response='.concat(o, ']'))),
              n.empty(),
              n.append(r.children())
          })
        }
        function de(e, t) {
          var a = e,
            n = a.parents('[data-container=filters]'),
            o = a.parents('[data-container=filter]'),
            r = o.data('filter-field'),
            i = le('[data-fetch-response]').filter(function (e, t) {
              return le(t).data('fetch-response') !== n.data('fetch-response')
            })
          window.filters.getData[o.data('get-type')](r, t),
            le.ajax({
              type: 'GET',
              url: window.location.href,
              dataType: 'html',
              data: window.filters.data,
              success: function (e) {
                se(i, e),
                  window.filters.fetchCallable[n.data('fetch-callable')](a, e)
              },
            })
        }
        function ue() {
          le(document).ready(function () {
            var e = []
            le(document)
              .find('[data-type=snippet-img-hide]')
              .each(function () {
                e.push(le(this).html())
              }),
              le(document)
                .find('[data-type=snippet-img-show]')
                .each(function (t) {
                  console.log(t), le(this).html(e[t])
                })
          })
        }
        le(function () {
          le(document).on('click', '[data-type=show_more_click]', function (e) {
            var t = le(this),
              a = t.parents('[data-type=container]'),
              n = a.find('[data-type=show_more_click_block]'),
              o = a.find('[data-type=items-container]')
            console.log('show more'),
              n.empty(),
              le.ajax({
                method: 'GET',
                url: t.data('url'),
                data: { ajax: 'pagen' },
                success: function (e) {
                  var t = le(e).find('[data-type=items-container]').html(),
                    a = le(e).find('[data-type=show_more_click]')
                  o.append(t),
                    a && n.append(a),
                    window.dispatchEvent(new Event('resize'))
                },
                error: function (e) {
                  console.debug(e)
                },
              })
          }),
            le('[data-type=form]').on('submit', function (e) {
              e.preventDefault()
              var t = le(this),
                a = t.attr('data-url'),
                n =
                  !!t.find('[data-type=get-field-file]').length &&
                  t.find('[data-type=get-field-file]'),
                o = !n && 'application/x-www-form-urlencoded; charset=UTF-8',
                r = !n,
                i = n ? new FormData() : {},
                c = t.data('ym-id')
              console.log(c),
                ym('54015997', 'reachGoal', c),
                n &&
                  (le.each(n.files, function (e, t) {
                    i.append('file[]', t)
                  }),
                  i.append('file', n[0].files[0])),
                t.find('[data-type=get-field]').each(function (e, t) {
                  var a = le(t),
                    o = a.val()
                  o &&
                    (n
                      ? i.append(a.data('field'), o)
                      : (i[a.data('field')] = o))
                }),
                le.ajax({
                  type: 'POST',
                  url: a,
                  dataType: 'json',
                  contentType: o,
                  processData: r,
                  data: i,
                  success: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments)
                    }
                    return (
                      (t.toString = function () {
                        return e.toString()
                      }),
                      t
                    )
                  })(function (e) {
                    e.success ? success(t) : console.log(e.message)
                  }),
                  error: function (e) {
                    console.debug(e)
                  },
                })
            }),
            le('[data-type=input-search]').keypress(function (e) {
              var t = le(this).val()
              13 == e.which && (document.location.href = '/search/?q=' + t)
            }),
            le(document).on(
              'change',
              '[data-type=filter-change]',
              function (e) {
                e.preventDefault(), console.log('change')
                var t = [],
                  a = le(document).find('[data-code=city]').val(),
                  n = document.getElementById('map')
                le(document)
                  .find('[data-code=type]')
                  .each(function (e, a) {
                    le(a).is(':checked') && (t[e] = le(a).attr('data-value'))
                  }),
                  console.log(a),
                  console.log(t),
                  le.ajax({
                    method: 'GET',
                    url: window.location.href,
                    data: { ajax: 1, city: a, type: t },
                    success: function (e) {
                      le(document).find('[data-type=items-list]').empty(),
                        le(document)
                          .find('[data-type=items-list]')
                          .append(le(e)),
                        Z(n.YMap, !0),
                        a &&
                          le(document)
                            .find('[data-code=city]')
                            .attr('data-select-placeholder', a)
                    },
                    error: function (e) {
                      console.debug(e)
                    },
                  })
              }
            ),
            le(document).on(
              'change',
              '[data-type=filter-change-catalog]',
              function (e) {
                e.preventDefault(), console.log('change catalog')
                var t = [],
                  a = le(this).attr('data-code-type'),
                  n = le(this).parents('body'),
                  o = [],
                  r = 0,
                  i = []
                console.log('type block active before each - ' + r),
                  n
                    .find('[data-type=filter-change-catalog]')
                    .each(function (e, a) {
                      var n = le(a).attr('data-code'),
                        o = le(a).attr('data-code-type')
                      if ('type' == n)
                        le(a).is(':checked') &&
                          ((i[e] = le(a).attr('data-value')),
                          (r = 1),
                          console.log('checked'))
                      else {
                        var c = le(a).parents('[data-range]'),
                          l = c.find('[data-range-from]').val(),
                          s = c.find('[data-range-to]').val(),
                          d = c.find('[data-type=hidden-min-' + o + ']').val(),
                          u = c.find('[data-type=hidden-max-' + o + ']').val()
                        ;(t[n] = le(a).val()),
                          l == d && s == u
                            ? c.attr('data-filter-active', 0)
                            : c.attr('data-filter-active', 1),
                          0 == l && 0 == s && c.attr('data-filter-active', 0)
                      }
                    }),
                  console.log('type block active - ' + r),
                  1 == r
                    ? n
                        .find('[data-type=range-type-block]')
                        .attr('data-filter-active', 1)
                    : n
                        .find('[data-type=range-type-block]')
                        .attr('data-filter-active', 0),
                  n.find('[data-filter-active=1]').each(function (e, t) {
                    var a = le(t).attr('data-code-type')
                    o[e] = a
                  }),
                  le.ajax({
                    method: 'GET',
                    url: window.location.href,
                    data: {
                      ajax: 'pagen',
                      type_filter: i,
                      height_max: t.height_max,
                      height_min: t.height_min,
                      length_max: t.length_max,
                      length_min: t.length_min,
                      price_max: t.price_max,
                      price_min: t.price_min,
                      width_max: t.width_max,
                      width_min: t.width_min,
                      sort_filter: t.sort,
                      active_code_filter_arr: o,
                    },
                    success: function (e) {
                      var t = le(e).find('[data-type=items-container]').html(),
                        o = le(e).find('[data-type=show_more_click]'),
                        r = le(e).find('[data-type=range-price-inner]').html(),
                        i = le(e).find('[data-type=range-length-inner]').html(),
                        c = le(e).find('[data-type=range-width-inner]').html(),
                        l = le(e).find('[data-type=range-height-inner]').html(),
                        s = le(e).find('[data-type=range-type-inner]').html()
                      if (
                        (n.find('[data-type=items-container]').empty(),
                        n.find('[data-type=items-container]').append(t),
                        n.find('data-cur-filter-code').val(a),
                        o &&
                          (n.find('[data-type=show_more_click_block]').empty(),
                          n
                            .find('[data-type=show_more_click_block]')
                            .append(o)),
                        'price' != a)
                      ) {
                        var d = n.find('[data-type=range-price-block]')
                        0 == d.attr('data-filter-active') &&
                          (d.empty(), d.append(r))
                      }
                      if ('length' != a) {
                        var u = n.find('[data-type=range-length-block]')
                        0 == u.attr('data-filter-active') &&
                          (u.empty(), u.append(i))
                      }
                      if ('width' != a) {
                        var f = n.find('[data-type=range-width-block]')
                        0 == f.attr('data-filter-active') &&
                          (f.empty(), f.append(c))
                      }
                      if ('height' != a) {
                        var p = n.find('[data-type=range-height-block]')
                        0 == p.attr('data-filter-active') &&
                          (p.empty(), p.append(l))
                      }
                      if ('type' != a) {
                        var m = n.find('[data-type=range-type-block]')
                        0 == m.attr('data-filter-active') &&
                          (m.empty(), m.append(s))
                      }
                      P()
                    },
                    error: function (e) {
                      console.debug(e)
                    },
                  })
              }
            ),
            le(document).on('click', '[data-type=modal-options]', function (e) {
              e.preventDefault()
              var t = le(this).attr('data-name-opt'),
                a = le(this).parents('body')
              console.log('Дополнительная опция - ' + t),
                le.ajax({
                  method: 'POST',
                  url: '/local/templates/main/include/ajax/modals/options.php',
                  data: { name: t },
                  success: function (e) {
                    console.log(e),
                      a.find('[data-type=modal-options-container]').empty(),
                      a
                        .find('[data-type=modal-options-container]')
                        .append(le(e)),
                      ue()
                  },
                  error: function (e) {
                    console.debug(e)
                  },
                })
            }),
            le('[data-type=form-order]').on('submit', function (e) {
              e.preventDefault()
              var t = le(this),
                a = t.attr('data-url'),
                n = t.parents('[data-type=form-containers]'),
                o = {},
                r = t.data('ym-id')
              r && ym('54015997', 'reachGoal', r),
                (o.UF_ID_PROD = n.attr('data-id-prod')),
                (o.UF_PROD_NAME = n.attr('data-name-prod')),
                (o.UF_MATERIALS = n.find('[data-ttl-order=materials]').text()),
                (o.UF_COATING = n.find('[data-ttl-order=coating]').text()),
                n.find('[color-mod-order=color-mod-order]').text() &&
                  (o.UF_COLOR_MOD =
                    n.find('[color-mod-order=color-mod-order]').text() +
                    ', ' +
                    n.find('[data-color-order=data-color-order]').text() +
                    ', цена - ' +
                    n.find('[data-price-order=color]').text() +
                    ' руб.'),
                n.find('[data-ttl-order=drainage]').text() &&
                  (o.UF_DRAINAGE =
                    n.find('[data-ttl-order=drainage]').text() +
                    ', цена - ' +
                    n.find('[data-price-order=drainage]').text() +
                    ' руб.'),
                n.find('[data-dop-id]').each(function (e, t) {
                  le(t).text() &&
                    (o.UF_DOP_OPTIONS
                      ? (o.UF_DOP_OPTIONS =
                          o.UF_DOP_OPTIONS +
                          ', ' +
                          le(t).find('div.txt').text() +
                          ' - цена: ' +
                          le(t).find('[data-price]').text() +
                          ' руб.')
                      : (o.UF_DOP_OPTIONS =
                          le(t).find('[data-title]').text() +
                          ' - цена: ' +
                          le(t).find('[data-price]').text() +
                          ' руб.'))
                }),
                n.find('[data-price-order=dop-options]').text() &&
                  (o.UF_DOP_OPTIONS =
                    o.UF_DOP_OPTIONS +
                    '. Цена - ' +
                    n.find('[data-price-order=dop-options]').text() +
                    ' руб.'),
                n.find('[data-ttl-order=dop1]').text() &&
                  (o.UF_FORNT_PANELS =
                    n.find('[data-ttl-order=dop1]').text() +
                    ', цена - ' +
                    n.find('[data-price-order=dop1]').text() +
                    ' руб.'),
                n.find('[data-ttl-order=dop2]').text() &&
                  (o.UF_SIDE_PANELS =
                    n.find('[data-ttl-order=dop2]').text() +
                    ', цена - ' +
                    n.find('[data-price-order=dop2]').text() +
                    ' руб.'),
                (o.UF_PRICE_FULL =
                  n.find('[data-total-price=data-total-price]').text() +
                  ' руб.'),
                t.find('[data-type=get-field]').each(function (e, t) {
                  var a = le(t),
                    n = a.val()
                  o[a.data('field')] = n
                }),
                console.log(o),
                le.ajax({
                  type: 'POST',
                  url: a,
                  dataType: 'json',
                  contentType:
                    'application/x-www-form-urlencoded; charset=UTF-8',
                  processData: !0,
                  data: o,
                  success: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments)
                    }
                    return (
                      (t.toString = function () {
                        return e.toString()
                      }),
                      t
                    )
                  })(function (e) {
                    e.success ? success(t) : console.log(e.message)
                  }),
                  error: function (e) {
                    console.debug(e)
                  },
                })
            }),
            ue(),
            le(document).on('click', '[data-type=filter-click]', function () {
              var e = le(this)
              de(e, e.data('val'))
            }),
            le(document).on('change', '[data-type=filter]', function () {
              var e = le(this)
              de(e, e.val())
            }),
            le(document).on('click', '[data-type=filter-apply]', function () {
              le(this)
                .parents('[data-container=filters]')
                .find('[data-container=filter]')
                .each(function (e, t) {
                  var a = le(t)
                  window.filters.getData[a.data('get-type')](a)
                }),
                le.ajax({
                  type: 'GET',
                  url: window.location.href,
                  dataType: 'html',
                  data: window.filters.data,
                  success: function (e) {
                    se(le('[data-fetch-response]'), e)
                  },
                })
            }),
            le('[data-range-event]').each(function (e, t) {
              var a = le(t)
              t.noUiSlider.on('change', function (e) {
                ;(window.filters.data.filters[a.data('field')] = e),
                  le.ajax({
                    type: 'GET',
                    url: window.location.href,
                    dataType: 'html',
                    data: window.filters.data,
                    success: function (e) {
                      se(le('[data-fetch-response]'), e)
                    },
                  })
              })
            }),
            le(document).on('click', '[data-type=filter-reset]', function () {
              ;(window.filters.data.filters = {}),
                le.ajax({
                  type: 'GET',
                  url: window.location.href,
                  dataType: 'html',
                  data: window.filters.data,
                  success: function (e) {
                    se(le('[data-fetch-response]'), e)
                  },
                })
            }),
            le(document).on('click', '[data-type=filter-remove]', function () {
              var e = le(this).data('field')
              delete window.filters.data.filters[e],
                le.ajax({
                  type: 'GET',
                  url: window.location.href,
                  dataType: 'html',
                  data: window.filters.data,
                  success: function (e) {
                    se(le('[data-fetch-response]'), e)
                  },
                })
            }),
            le(document).on('change', '[data-type=sort]', function () {
              var e = le(this),
                t = e.data('field')
              ;(window.sort.data.sort[t] = e.val()),
                (window.sort.data.filters = window.filters.data.filters),
                le.ajax({
                  type: 'GET',
                  url: window.location.href,
                  dataType: 'html',
                  data: window.sort.data,
                  success: function (e) {
                    se(le('[data-fetch-response]'), e)
                  },
                })
            })
        }),
          (window.filters = {
            data: { filters: {}, ajax: 'filters' },
            getData: {
              one: function (e, t) {
                return t
                  ? ((window.filters.data.filters[e] = t), !0)
                  : (delete window.filters.data.filters[e], !1)
              },
              many: function (e, t) {
                var a
                return (
                  window.filters.data.filters[e] ||
                    (window.filters.data.filters[e] = {}),
                  window.filters.data.filters[e][t]
                    ? ((a = !1),
                      delete window.filters.data.filters[e][t],
                      Object.keys(window.filters.data.filters[e]).length ||
                        delete window.filters.data.filters[e])
                    : ((a = !0), (window.filters.data.filters[e][t] = t)),
                  a
                )
              },
              range: function (e) {
                window.filters.data.filters[e.data('field')] = e
                  .find('[data-range-range]')[0]
                  .noUiSlider.get()
              },
              checkbox: function (e) {
                var t = {}
                e.find(':checkbox:checked').each(function (e, a) {
                  console.log(le(a))
                  var n = le(a).val()
                  t[n] = n
                }),
                  (window.filters.data.filters[e.data('field')] = t)
              },
            },
            fetchCallable: {
              initMap: function () {
                console.log(document.getElementById('map')),
                  Z(document.getElementById('map').YMap, !0)
              },
            },
          }),
          window.addEventListener('cloneFilter', function (e) {
            var t = le(e.detail.elem).find('[data-type=filter-remove]')
            try {
              t.find('[data-type=filter-remove]').attr(
                'data-field',
                JSON.parse(e.detail.field)[e.detail.index]
              )
            } catch (e) {
              t.find('[data-type=filter-remove]').attr(
                'data-field',
                e.detail.field
              )
            }
          }),
          (window.sort = { data: { filters: {}, sort: {}, ajax: 'sort' } }),
          le(document).on(
            'change',
            '[data-type=filter-change-test]',
            function () {
              var e = le(this),
                t = e.parents('[data-container=filter]'),
                a = t.data('filter-field')
              window.filters.getData[t.data('get-type')](a, e.val()),
                le.ajax({
                  type: 'GET',
                  url: window.location.href,
                  dataType: 'html',
                  data: window.filters.data,
                  success: function (e) {
                    se(le('[data-fetch-response]'), e)
                  },
                })
            }
          ),
          window.addEventListener('paginationTrigger', function () {
            var e = '[data-type=items-container]',
              t = le(e),
              a = '[data-type=hidden-pagen]',
              n = le(a),
              o = n.data('url')
            n.length &&
              (n.remove(),
              le.ajax({
                url: o,
                method: 'get',
                dataType: 'html',
                data: { ajax: 'pagen' },
                success: function (n) {
                  t.append(le(n).filter(e).children())
                  var o = le(n).filter(a)
                  o && t.after(o)
                },
              }))
          })
        var fe = a(5638),
          pe = document.querySelector('[data-type=site-templ-path]')
        ;(window.CONFIG =
          window.location.hostname &&
          'cloudmill.github.io' !== window.location.hostname
            ? { path: pe ? pe.value : '/local/templates/main', debug: !0 }
            : { path: './', debug: !0 }),
          document.addEventListener('DOMContentLoaded', function () {
            var e
            !(function () {
              var e = document.querySelector('#main-slider')
              if (e) {
                var t = e.querySelectorAll('.swiper-slide').length,
                  a = e.querySelector('[data-pagination]'),
                  o = a.querySelector('[data-pagination-current]'),
                  r = a.querySelector('[data-pagination-total]'),
                  i = 'first move'
                new n.ZP('#main-slider', {
                  modules: [n.W_, n.tl],
                  loop: !0,
                  speed: 1e3,
                  navigation: {
                    prevEl: '#main-slider-prev',
                    nextEl: '#main-slider-next',
                  },
                  on: {
                    init: function () {
                      ;(r.textContent = t < 10 ? '0'.concat(t) : t),
                        this.$el
                          .find('.swiper-slide-active')
                          .addClass('text-out')
                    },
                    slideChange: function () {
                      if ('first move' !== i) {
                        var e = this.realIndex + 1
                        a.classList.add('text-out'),
                          setTimeout(function () {
                            ;(o.textContent = e < 10 ? '0'.concat(e) : e),
                              a.classList.remove('text-out')
                          }, 800)
                      } else i = 'inited'
                    },
                  },
                })
              }
              var c = new n.ZP('#product-slider', {
                modules: [n.tl],
                loop: l('#product-slider'),
                speed: 800,
                pagination: { el: '#product-slider-pagination', clickable: !0 },
              })
              document.querySelector('#product-slider') &&
                (document
                  .querySelectorAll('#product-slider-prev')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      c.slidePrev()
                    })
                  }),
                document
                  .querySelectorAll('#product-slider-next')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      c.slideNext()
                    })
                  }))
              var d = new n.ZP('#product-slider2', {
                modules: [n.tl],
                loop: l('#product-slider2'),
                speed: 800,
                pagination: {
                  el: '#product-slider-pagination2',
                  clickable: !0,
                },
              })
              document.querySelector('#product-slider2') &&
                (document
                  .querySelectorAll('#product-slider-prev2')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      d.slidePrev()
                    })
                  }),
                document
                  .querySelectorAll('#product-slider-next2')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      d.slideNext()
                    })
                  })),
                new n.ZP('#small-product-slider', {
                  modules: [n.W_],
                  loop: !0,
                  speed: 800,
                  navigation: {
                    prevEl: '#small-product-slider-prev',
                    nextEl: '#small-product-slider-next',
                  },
                })
              var u = new n.ZP('#about-slider', {
                modules: [n.W_],
                loop: l('#about-slider'),
                speed: 800,
                pagination: { el: '.swiper-pagination', clickable: !0 },
              })
              document.querySelector('#about-slider') &&
                (document
                  .querySelectorAll('#about-slider-prev')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      u.slidePrev()
                    })
                  }),
                document
                  .querySelectorAll('#about-slider-next')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      u.slideNext()
                    })
                  }))
              var f = new n.ZP('#cards-slider', {
                modules: [n.W_],
                breakpoints: {
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2.1, spaceBetween: 10 },
                  1024: { slidesPerView: 2.5, spaceBetween: 12 },
                },
              })
              document.querySelector('#cards-slider') &&
                (document
                  .querySelectorAll('#cards-slider-prev')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      f.slidePrev()
                    })
                  }),
                document
                  .querySelectorAll('#cards-slider-next')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      f.slideNext()
                    })
                  })),
                s('#cards-slider', 'cards')
              var p = new n.ZP('#cards-slider2', {
                modules: [n.W_],
                breakpoints: {
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2.1, spaceBetween: 10 },
                  1024: { slidesPerView: 2.5, spaceBetween: 12 },
                },
              })
              document.querySelector('#cards-slider2') &&
                (document
                  .querySelectorAll('#cards-slider-prev2')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      p.slidePrev()
                    })
                  }),
                document
                  .querySelectorAll('#cards-slider-next2')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      p.slideNext()
                    })
                  })),
                s('#cards-slider2', 'cards2'),
                new n.ZP('#colors-slider', {
                  modules: [n.W_],
                  slidesPerView: 8,
                  spaceBetween: 4,
                })
            })(),
              y('form').parsley(),
              Parsley.addMessages('ru', {
                defaultMessage: 'Некорректное значение',
                type: {
                  email: 'Введите адрес электронной почты',
                  url: 'Введите URL адрес',
                  number: 'Введите число',
                  integer: 'Введите целое число',
                  digits: 'Введите только цифры',
                  alphanum: 'Введите буквенно-цифровое значение',
                },
                notblank: 'Это поле должно быть заполнено',
                required: 'Заполните поле',
                pattern: 'Это значение некорректно',
                min: 'Это значение должно быть не менее чем %s',
                max: 'Это значение должно быть не более чем %s',
                range: 'Это значение должно быть от %s до %s',
                minlength: 'Это значение должно содержать не менее %s символов',
                maxlength: 'Это значение должно содержать не более %s символов',
                length: 'Это значение должно содержать от %s до %s символов',
                mincheck: 'Выберите не менее %s значений',
                maxcheck: 'Выберите не более %s значений',
                check: 'Выберите от %s до %s значений',
                equalto: 'Это значение должно совпадать',
              }),
              Parsley.setLocale('ru'),
              Parsley.addValidator('telLength', {
                requirementType: 'number',
                validateString: function (e, t) {
                  return e.replace(/\D/g, '').length === t
                },
                messages: { ru: 'Телефон введён не полностью' },
              }),
              document
                .querySelectorAll('[data-parsley-validate]')
                .forEach(function (e) {
                  e.addEventListener('submit', function (t) {
                    t.preventDefault()
                    var a = b(
                      b({}, h),
                      {},
                      {
                        beforeClose: function () {
                          e.reset(),
                            e
                              .querySelectorAll('[data-input]')
                              .forEach(function (e) {
                                e.classList.remove('form-input--active')
                              })
                        },
                      }
                    )
                    ;(y.fancybox.defaults = b(b({}, y.fancybox.defaults), a)),
                      y.fancybox.open(y('[data-fancy-modal=response]'))
                  })
                }),
              Inputmask({
                mask: '+7 (999) 999-99-99',
                showMaskOnHover: !1,
              }).mask('[data-phone-input]'),
              window.Parsley.addValidator('string', {
                requirementType: 'string',
                validateString: function (e) {
                  var t = /[^a-zа-яё\s]/i
                  return console.log(t.test(e)), !t.test(e)
                },
                messages: { ru: 'Спецсимволы и цифры запрещены' },
              }),
              (e = document.querySelectorAll('[data-popular-tabs]')).length &&
                e.forEach(function (e) {
                  e.addEventListener('click', function () {
                    e.classList.toggle('active')
                  })
                }),
              S('data-tab'),
              S('data-tab2'),
              S('data-tab3'),
              (0, E.ZP)('[data-meta-tooltip]', {
                content:
                  '<div class="tooltip-small-text">*Является продуктом компании Meta, признанной экстремистской организацией, деятельность которой запрещена на территории РФ</div>',
                maxWidth: 280,
                placement: 'right',
                allowHTML: !0,
                trigger: L(),
              }),
              d()
            var t = document.querySelectorAll('.js-badger-accordion')
            Array.from(t).forEach(function (e) {
              new u.Z(e)
            })
            var a = document.querySelector('[data-articule]')
            a &&
              document
                .querySelectorAll('[data-articule-tab]')
                .forEach(function (e) {
                  e.addEventListener('click', function () {
                    a.innerText = e.getAttribute('data-articule-tab')
                  })
                }),
              document.querySelector('[data-catalog-page]') &&
                (null !==
                  window.sessionStorage.getItem('catalogLastPosition') &&
                  window.scrollTo(
                    0,
                    Number(window.sessionStorage.getItem('catalogLastPosition'))
                  ),
                window.addEventListener('beforeunload', function () {
                  window.sessionStorage.setItem(
                    'catalogLastPosition',
                    ''.concat(window.pageYOffset)
                  )
                }))
            var o = document.querySelector('[data-old-modal]'),
              r = document.querySelector('[data-old-modal-close]')
            o &&
              r.addEventListener('click', function () {
                o.remove()
              }),
              fe('[data-sidebar-toggle]').on('click', function () {
                fe('[data-sidebar-drop]').toggleClass('show'),
                  fe('[data-sidebar-toggle]').toggleClass('active')
              })
          }),
          window.addEventListener('load', function () {
            !(function () {
              if (q('[data-anchor-links]').length) {
                var e = function () {
                    ;(r.length = 0),
                      q('[data-section]').each(function () {
                        r.push({
                          top: q(this).offset().top,
                          a: c.filter(
                            '[data-scroll="#' + q(this).attr('id') + '"]'
                          ),
                        })
                      }),
                      (r = r.reverse())
                  },
                  t = function () {
                    for (
                      var e = q(window).scrollTop(), t = 0;
                      t < r.length;
                      t++
                    )
                      if (r[t].top - a < e + a) {
                        i !== t &&
                          ((i = t),
                          o.removeClass('active'),
                          r[t].a.addClass('active'))
                        break
                      }
                    r[r.length - 1].top - a > e + a &&
                      (o.removeClass('active'),
                      r[r.length - 1].a.addClass('active'))
                  },
                  a = q('.header').height() + 10,
                  n = 60,
                  o = q('[data-page-link]'),
                  r = [],
                  i = null,
                  c = o
                e(),
                  q(window).one('resize', function t() {
                    setTimeout(function () {
                      e(), q(window).one('resize', t)
                    }, 1e3 / n)
                  }),
                  t(),
                  q(window).one('scroll', function e() {
                    setTimeout(function () {
                      t(), q(window).one('scroll', e)
                    }, 1e3 / n)
                  }),
                  q('[data-scroll]').on('click', function (e) {
                    e.preventDefault()
                    var t = q(this).data('scroll'),
                      n = q(t).offset().top
                    q('html, body').animate({ scrollTop: n - a }, 700)
                  })
              }
            })(),
              (function () {
                var e = document.querySelector('[data-product-title]'),
                  t = document.querySelector('[data-back-button-offset]')
                if (e && t && i.matches) {
                  var a = e.getBoundingClientRect().top + e.clientHeight + 16
                  t.style.paddingTop = ''.concat(a, 'px')
                }
              })()
            var e = document.querySelector('[data-about-video]')
            e && (e.play(), e.setAttribute('autoplay', ''))
          })
      },
      9135: () => {
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelector('[data-filter-selected]')
          if (e) {
            var t = {},
              a = document.querySelector('[data-filter-price]'),
              n = document.querySelectorAll('[data-catalog-accordion]')
            n.forEach(function (e) {
              e.onclick = function () {
                var t = document.querySelector(
                  '[data-catalog-accordion].active'
                )
                t && t.classList.remove('active'), e.classList.toggle('active')
              }
            }),
              window.addEventListener('click', function (o) {
                var r = o.target
                if (r.closest('[data-filter-accept]')) {
                  var i = r.closest('[data-filter-property]'),
                    c = i.getAttribute('data-filter-property'),
                    l = i.querySelectorAll('[data-filter-range]'),
                    s = []
                  if (l.length)
                    l.forEach(function (e) {
                      var t = e.getAttribute('data-filter-range').split(' '),
                        a = e.noUiSlider.get()
                      s.push(
                        ''
                          .concat(t[0], ' ')
                          .concat(a.join(' - '), ' ')
                          .concat(t[1])
                      )
                    })
                  else
                    i.querySelectorAll('[data-filters-check]').forEach(
                      function (e) {
                        e.checked &&
                          s.push(e.getAttribute('data-filters-check'))
                      }
                    )
                  t[c] = s
                  var d = a.noUiSlider.get()
                  ;(t.price = [''.concat(d.join(' - '), ' ₽')]),
                    console.log(t),
                    (function (t) {
                      var a = e.querySelector('[data-filter-template]'),
                        n = e.querySelector('[data-filter-list]')
                      n.innerHTML = ''
                      var o = 0,
                        r = function (e) {
                          t[e].forEach(function (t) {
                            var r = a.content.firstElementChild.cloneNode(!0),
                              i = r.querySelector('[data-prop-text]')
                            window.dispatchEvent(
                              new CustomEvent('cloneFilter', {
                                detail: { field: e, elem: r, index: o },
                              })
                            ),
                              (i.textContent = t),
                              n.append(r),
                              o++
                          })
                        }
                      for (var i in t) r(i)
                      e.classList.remove('hidden')
                    })(t),
                    r
                      .closest('[data-catalog-accordion]')
                      .classList.remove('active')
                }
                if (r.closest('[data-prop-delete]')) {
                  var u = r.closest('[data-prop]'),
                    f = u.querySelector('[data-prop-text]'),
                    p = document.querySelector(
                      '[data-filters-check="'.concat(f.textContent, '"]')
                    )
                  p && ((p.checked = !1), p.dispatchEvent(new Event('change'))),
                    u.remove()
                }
                if (r.closest('[data-filter-reset]')) {
                  var m = e.querySelector('[data-filter-list]')
                  document
                    .querySelectorAll('[data-filters-check]')
                    .forEach(function (e) {
                      e.checked && (e.checked = !1)
                    }),
                    (m.innerHTML = ''),
                    (t = {}),
                    e.classList.add('hidden')
                }
                r.closest('[data-catalog-accordion]') ||
                  n.forEach(function (e) {
                    return e.classList.remove('active')
                  })
              })
          }
        })
      },
      1044: () => {
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelectorAll('[data-category]')
          e.length &&
            e.forEach(function (e) {
              e.onclick = function () {
                this.classList.toggle('active')
              }
            })
        })
      },
      3053: () => {
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelectorAll('[data-input]')
          e.length &&
            e.forEach(function (e) {
              e.oninput = function () {
                this.value
                  ? this.classList.add('form-input--active')
                  : this.classList.remove('form-input--active')
              }
            })
        })
      },
      2972: () => {
        document.addEventListener('DOMContentLoaded', function () {
          var e = document.querySelector('[data-listing-section]')
          e &&
            window.addEventListener('scroll', function () {
              window.scrollY + window.innerHeight >=
                e.offsetHeight + e.offsetTop - 200 &&
                window.dispatchEvent(new CustomEvent('paginationTrigger'))
            })
        })
      },
      685: () => {
        function e() {
          document.querySelectorAll('[data-opts-set]').forEach(function (e) {
            'colors2' === e.getAttribute('data-opts-set') ||
              'colors1' === e.getAttribute('data-opts-set') ||
              (!e.closest('.options-contents__item.active') &&
                'materials' != e.getAttribute('data-opts-set')) ||
              (function (e) {
                var t,
                  o,
                  r,
                  i,
                  c,
                  l = n(e),
                  s = function (e) {
                    return (
                      null !== e.querySelector('[data-product-tab].active') &&
                      e.querySelector('[data-product-tab].active')
                    )
                  }
                t = 'coating' == e ? 'materials' : e
                function d(e, t) {
                  ;(o = document.querySelector(
                    "[data-ttl-order='".concat(e, "']")
                  )),
                    (r = document.querySelector(
                      "[data-price-order='".concat(t, "']")
                    ))
                }
                function u() {
                  var t
                  ;(i =
                    !1 !== s(l) ? s(l).querySelector('[data-opt-ttl]') : null),
                    'materials' == e || 'coating' == e
                      ? (document
                          .querySelectorAll('[data-base-price].active')
                          .forEach(function (e) {
                            e.closest('.options-contents__item.active') &&
                              (t = Number(e.getAttribute('data-base-price')))
                          }),
                        (c = t))
                      : (c =
                          !1 === s(l)
                            ? 0
                            : Number(
                                s(l)
                                  .querySelector('[data-opt-price]')
                                  .getAttribute('data-opt-price')
                              ))
                }
                function f() {
                  null !== o &&
                    (null === i
                      ? (o.innerText = '')
                      : (o.innerHTML = i.innerHTML)),
                    null !== r && (r.innerText = c.toLocaleString())
                }
                d(e, t),
                  u(),
                  f(),
                  l.addEventListener('click', function () {
                    setTimeout(function () {
                      u(), f(), a()
                    })
                  }),
                  a()
              })(e.getAttribute('data-opts-set'))
          })
        }
        function t() {
          if (n('colors1') && n('colors2')) {
            var e = function (e) {
                var t = document.querySelector('[color-mod-order]'),
                  a = Number(e.getAttribute('data-color-price')),
                  n = document.querySelector('[data-price-order="color"]')
                ;(t.innerText = e.getAttribute('data-color-tab')),
                  (n.innerText = a.toLocaleString())
              },
              t = function () {
                setTimeout(function () {
                  var e = n('colors2')
                    .querySelector('.colors-tabs-block.active')
                    .querySelector('[data-product-tab].active')
                  document.querySelector('[data-color-order]').innerText =
                    e.getAttribute('data-opt-ttl')
                })
              },
              o = n('colors1').querySelector('[data-product-tab].active')
            e(o),
              t(),
              a(),
              n('colors1').addEventListener('click', function (n) {
                if ((o = n.target.closest('[data-color-tab]'))) {
                  var r = function (e) {
                      return o.parentNode.querySelector(
                        '[data-tab="'.concat(e, '"]')
                      )
                    },
                    i = function (e) {
                      return Number(r(e).getAttribute('data-color-price'))
                    },
                    c = function (e, t) {
                      r(e).querySelector('.opt-price-diff').innerHTML =
                        t > 0 ? '+' + t.toLocaleString() : t.toLocaleString()
                    }
                  if (
                    (t(),
                    e(o),
                    a(),
                    o.hasAttribute('data-default-opt')
                      ? document
                          .querySelector('[data-color-row]')
                          .classList.add('display-none')
                      : document
                          .querySelector('[data-color-row]')
                          .classList.remove('display-none'),
                    '1' === o.getAttribute('data-tab'))
                  )
                    c(2, i(2)), r(3) && c(3, i(3))
                  else if ('2' === o.getAttribute('data-tab')) {
                    if ((c(1, -i(2)), r(3))) c(3, i(3) - i(2))
                  } else if ('3' === o.getAttribute('data-tab')) {
                    var l = -i(3),
                      s = i(2) - i(3)
                    c(1, l), c(2, s)
                  }
                }
              }),
              n('colors2').addEventListener('click', function () {
                t()
              })
          }
        }
        function a() {
          var e = document.querySelectorAll('[data-total-price]'),
            t = []
          document.querySelectorAll('[data-price]').forEach(function (e) {
            var a = Number(e.innerText.replace(/[^0-9-]/g, ''))
            t.push(a)
          }),
            e.forEach(function (e) {
              var a = t.reduce(function (e, t) {
                return e + t
              }, 0)
              e.innerText = a.toLocaleString()
            })
        }
        function n(e) {
          var t
          return (
            document
              .querySelectorAll("[data-opts-set='".concat(e, "']"))
              .forEach(function (a) {
                ;((a.closest('.options-contents-inner__item.active') &&
                  a.closest('.options-contents__item.active')) ||
                  'materials' == e ||
                  ('coating' == e &&
                    a.closest('.options-contents__item.active'))) &&
                  (t = a)
              }),
            t
          )
        }
        function o() {
          var e = document.querySelector('[data-articule]')
          document
            .querySelectorAll('[data-articule-tab].active')
            .forEach(function (t) {
              t.closest('.options-contents__item.active') &&
                t.closest('.options-contents-inner__item.active') &&
                (e.innerText = t.getAttribute('data-articule-tab'))
            })
        }
        function r() {
          document.querySelectorAll('[data-opts-set]').forEach(function (e) {
            e.closest('.options-contents-inner__item.active') &&
              e.closest('.options-contents__item.active') &&
              (e.hasAttribute('data-no-default-opt') &&
              e.querySelector('[data-product-tab].active')
                ? e
                    .querySelector('[data-product-tab].active')
                    .classList.remove('active')
                : 'materials' !== e.getAttribute('data-opts-set') &&
                  'coating' !== e.getAttribute('data-opts-set') &&
                  'drainage' !== e.getAttribute('data-opts-set') &&
                  (e
                    .querySelector('[data-product-tab].active')
                    .classList.remove('active'),
                  e
                    .querySelector('[data-default-opt]')
                    .classList.add('active')))
          }),
            document
              .querySelectorAll('[data-opts-set="colors2"]')
              .forEach(function (e) {
                e
                  .querySelector('[data-tab-content].active')
                  .classList.remove('active'),
                  e
                    .querySelector('[data-tab-content="1"]')
                    .classList.add('active')
              }),
            document
              .querySelectorAll('[data-dop-options]')
              .forEach(function (e) {
                e.closest('.options-contents-inner__item.active') &&
                  e.closest('.options-contents__item.active') &&
                  (e
                    .querySelectorAll('input[type="checkbox"]')
                    .forEach(function (e) {
                      e.checked = !1
                    }),
                  e.querySelectorAll('[data-dop-option]').forEach(function (e) {
                    e.setAttribute('data-dop-option', '')
                  }))
              })
        }
        document.querySelector('[data-product-options]') &&
          (e(),
          t(),
          (function () {
            function e(e) {
              var t = e.target.closest('input'),
                n = t.closest('[data-dop-option]'),
                r = document.querySelector('[data-dop-options-order]'),
                i = n.closest('[data-dop-options]')
              if (!0 === t.checked) {
                var c = n.querySelector('[data-dop-option-txt]').innerText,
                  l = n.querySelector('[data-dop-option-price]').innerText
                if (
                  (n.setAttribute('data-dop-option', 'selected'),
                  r.insertAdjacentHTML(
                    'beforeend',
                    "<div class='space-between' data-dop-id='"
                      .concat(
                        t.id,
                        "'>\n              <div class='txt' data-title>"
                      )
                      .concat(
                        c,
                        "</div>\n              <div class='order-modal-info__num'>\n                <span data-price>"
                      )
                      .concat(
                        l,
                        "</span>\n                <span class='rouble'>a</span>\n              </div>\n            </div>"
                      )
                  ),
                  n.hasAttribute('data-articule-dop'))
                )
                  document.querySelector('[data-articule]').innerText =
                    n.getAttribute('data-articule-dop')
              } else
                n.setAttribute('data-dop-option', ''),
                  r.querySelector("[data-dop-id='".concat(t.id, "']")).remove(),
                  'selected' !==
                    i
                      .querySelector('[data-articule-dop]')
                      .getAttribute('data-dop-option') && o()
              r.querySelectorAll('[data-dop-id]').length < 1
                ? document
                    .querySelector('[data-dop-options-order-row]')
                    .classList.add('display-none')
                : document
                    .querySelector('[data-dop-options-order-row]')
                    .classList.remove('display-none'),
                a()
            }
            document
              .querySelectorAll('[data-dop-option-checkbox]')
              .forEach(function (t) {
                t.addEventListener('input', e)
              })
          })(),
          document.querySelectorAll('[data-main-tabs]').forEach(function (n) {
            n.addEventListener('click', function (n) {
              n.target.closest('[data-tab]') &&
                setTimeout(function () {
                  r(),
                    e(),
                    t(),
                    o(),
                    (document.querySelector(
                      '[data-dop-options-order]'
                    ).innerHTML = ''),
                    a()
                })
            })
          }),
          document
            .querySelectorAll('[data-opts-set="coating"]')
            .forEach(function (n) {
              n.addEventListener('click', function (n) {
                n.target.closest('[data-tab3]') &&
                  setTimeout(function () {
                    r(),
                      e(),
                      t(),
                      o(),
                      (document.querySelector(
                        '[data-dop-options-order]'
                      ).innerHTML = ''),
                      a()
                  })
              })
            }))
      },
    },
    a = {}
  function n(e) {
    var o = a[e]
    if (void 0 !== o) return o.exports
    var r = (a[e] = { exports: {} })
    return t[e].call(r.exports, r, r.exports, n), r.exports
  }
  ;(n.m = t),
    (e = []),
    (n.O = (t, a, o, r) => {
      if (!a) {
        var i = 1 / 0
        for (d = 0; d < e.length; d++) {
          for (var [a, o, r] = e[d], c = !0, l = 0; l < a.length; l++)
            (!1 & r || i >= r) && Object.keys(n.O).every((e) => n.O[e](a[l]))
              ? a.splice(l--, 1)
              : ((c = !1), r < i && (i = r))
          if (c) {
            e.splice(d--, 1)
            var s = o()
            void 0 !== s && (t = s)
          }
        }
        return t
      }
      r = r || 0
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1]
      e[d] = [a, o, r]
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 143: 0 }
      n.O.j = (t) => 0 === e[t]
      var t = (t, a) => {
          var o,
            r,
            [i, c, l] = a,
            s = 0
          if (i.some((t) => 0 !== e[t])) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o])
            if (l) var d = l(n)
          }
          for (t && t(a); s < i.length; s++)
            (r = i[s]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0)
          return n.O(d)
        },
        a = (self.webpackChunk = self.webpackChunk || [])
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)))
    })()
  var o = n.O(void 0, [394], () => n(1256))
  o = n.O(o)
})()
