import { test, expect, Page } from '@playwright/test'

test.describe('Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('deve validar usuário obrigatório', async ({ page }) => {
    await login(page, '', 'senha123')

    await expectToast(
      page,
      'Informe o seu nome de usuário!'
    )
  })

  test('deve validar senha obrigatória', async ({ page }) => {
    await login(page, 'qa', '')

    await expectToast(
      page,
      'Informe a sua senha secreta!'
    )
  })

  test('deve validar usuário inexistente', async ({ page }) => {
    await login(page, 'teste', 'teste')

    await expectToast(
      page,
      'Oops! Credenciais inválidas :('
    )
  })

  test('deve validar senha incorreta', async ({ page }) => {
    await login(page, 'qa', 'teste')

    await expectToast(
      page,
      'Oops! Credenciais inválidas :('
    )
  })

  test('deve realizar login com sucesso', async ({ page }) => {
    await login(page, 'qa', 'xperience')

    await expectModal(
      page,
      'Suas credenciais são válidas :)'
    )
  })
})

async function login(
  page: Page,
  username: string,
  password: string
) {
  await page.getByRole('textbox', {
    name: /usuário/i
  }).fill(username)

  await page.getByRole('textbox', {
    name: /senha/i
  }).fill(password)

  await page.getByRole('button', {
    name: /entrar/i
  }).click()
}

async function expectToast(
  page: Page,
  message: string
) {
  await expect(
    page.getByRole('status')
  ).toHaveText(message)
}

async function expectModal(
  page: Page,
  message: string
) {
  await expect(
    page.locator('.swal2-html-container')
  ).toHaveText(message)
}