import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../components/Input/Input'
import { submitEditProfile } from '../../reduxToolkit/profile'
import './EditProfile.scss'

const EditProfile = () => {
  const [inputValue, setInputValue] = useState({
    nama: '',
    gender: '',
    umur: '',
    pasangan: ''
  })

  const users = useSelector((state) => state.profile.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const {nama, gender, umur, pasangan} = users && {...users}

    setInputValue({
      nama: nama,
      gender: gender,
      umur: umur,
      pasangan: pasangan
    })
  }, [users])

  function changeInput(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  function changeGender(value) {
    setInputValue({
      ...inputValue,
      gender: value
    })
  }

  function submit(e) {
    e.preventDefault()

    let checkSomeValue = false

    const {nama, gender, umur, pasangan} = inputValue && {...inputValue}

    if(nama.trim() && nama.trim() !== users.nama){
      checkSomeValue = true
    }
    if(gender.trim() && gender.trim() !== users.gender){
      checkSomeValue = true
    }
    if(umur.trim() && umur.trim() !== users.umur){
      checkSomeValue = true
    }
    if(pasangan.trim() && pasangan.trim() !== users.pasangan){
      checkSomeValue = true
    }

    if(checkSomeValue && window.confirm('perbarui profile?')){
      dispatch(submitEditProfile(inputValue))
      return alert('profile berhasil diperbarui')
    }else if(checkSomeValue){
      return
    }
    
    return
  }

  return (
    <div className="wrapp-edit-profile">
      <div className="edit-profile">
        <form onSubmit={submit}>
          <Input
            label="Nama"
            type="text"
            name="nama"
            placeholder="Masukkan nama Anda"
            value={inputValue && inputValue.nama}
            changeInput={changeInput}
          />
          <Input
            label="Gender"
            displayLabelRadio="flex"
            labelRadio="Pria"
            type="radio"
            id="pria"
            name="pria"
            widthInput="auto"
            cursorColInput="pointer"
            classInput={inputValue && inputValue.gender === 'Pria' ? 'radio-active' : 'radio'}
            clickInput={() => changeGender('Pria')}
          />
          <Input
            type="radio"
            displayLabelRadio="flex"
            labelRadio="Wanita"
            name="wanita"
            id="wanita"
            widthInput="auto"
            cursorColInput="pointer"
            classInput={inputValue && inputValue.gender === 'Wanita' ? 'radio-active' : 'radio'}
            clickInput={() => changeGender('Wanita')}
          />
          <Input
            label="Umur"
            type="text"
            name="umur"
            placeholder="Masukkan umur Anda"
            value={inputValue && inputValue.umur}
            changeInput={changeInput}
          />
          <Input
            label="Pasangan"
            type="text"
            name="pasangan"
            placeholder="Masukkan pasangan Anda"
            value={inputValue && inputValue.pasangan}
            changeInput={changeInput}
          />

          <button>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile