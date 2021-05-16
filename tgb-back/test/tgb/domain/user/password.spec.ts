import { Password } from "@/tgb/domain/model/user/password";


describe('password', () => {

  it('normal', () => {
    expect(new Password("password123")).toBeDefined();
  })

  it('normal2', () => {
    expect(new Password("pass123word")).toBeDefined();
  })
})
