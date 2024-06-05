import { NextPage } from "next"
import { Layout } from "../../components/Layout"
import { SEOHeaders } from "../../components/SEOHeaders"
import {
  Text,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react"
import { ChangeEventHandler, useCallback, useState } from "react"

const ParseSFHistoryPage: NextPage = () => {
  const [history, setHistory] = useState<string>("")
  const handleOnChangeHistory = useCallback<
    ChangeEventHandler<HTMLTextAreaElement>
  >((e) => {
    setHistory(e.currentTarget.value)
  }, [])

  const convertPlaceText = (text: string) => {
    return text.trimEnd()
  }

  const [filter, setFilter] = useState<string>("")

  const parsed = history
    .split("\n")
    .map((h) => {
      const row = h.split("\t")
      return row
    })
    .filter((row) => 1 < row.length)
    .map<History>((row) => {
      const [date, type, from, _type2, to, _balance, _transfer] = row
      const [month, day] = date.split("/")
      if (type === "入") {
        return {
          type: "boarding",
          month: parseInt(month),
          day: parseInt(day),
          from: convertPlaceText(from),
          to: convertPlaceText(to),
        }
      } else {
        return {
          type: "other",
          month: parseInt(month),
          day: parseInt(day),
          row,
        }
      }
    })

  type History =
    | {
        type: "boarding"
        month: number
        day: number
        from: string
        to: string
      }
    | {
        type: "other"
        month: number
        day: number
        row: unknown
      }

  const grouped = parsed.reduce<{
    [key: number]: {
      history: History[]
      count: number
    }
  }>((acc, cur) => {
    if (cur.type !== "boarding") return acc

    if (cur.from === filter) {
      if (acc[cur.month]) {
        acc[cur.month].history.push(cur)
        acc[cur.month].count++
      } else {
        acc[cur.month] = {
          history: [cur],
          count: 1,
        }
      }
    }
    return acc
  }, {})

  const options = new Set(
    parsed.flatMap((h) => (h.type === "boarding" ? [h.from] : [])),
  )

  return (
    <Layout>
      <SEOHeaders titleType="page" title={"Parse SF History"} />
      <Container maxW={"container.lg"}>
        <Stack spacing={"6"}>
          <Heading fontSize={"lg"}>Parse SF History</Heading>
          <Stack fontSize={"sm"} color={"gray.600"}>
            <Text>
              「SF利用履歴」から指定した駅の利用回数を数えるツールです。
            </Text>
            <OrderedList>
              <ListItem>
                <Link
                  href={"https://www.mobilesuica.com/"}
                  color={"linkedin.600"}
                  isExternal
                >
                  https://www.mobilesuica.com/
                </Link>
                にログイン
              </ListItem>
              <ListItem>「SF（電子マネー）利用履歴」を開く</ListItem>
              <ListItem>ページを全選択して内容をコピー</ListItem>
              <ListItem>下の「SF履歴」に貼り付け</ListItem>
              <ListItem>下の「集計する駅」で数えたい駅を選択</ListItem>
            </OrderedList>
          </Stack>
          <Stack spacing={"6"}>
            <FormControl>
              <FormLabel>SF履歴</FormLabel>
              <Textarea
                value={history}
                onChange={handleOnChangeHistory}
                rows={6}
              />
            </FormControl>
            <FormControl>
              <FormLabel>集計する駅（入）</FormLabel>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.currentTarget.value)}
              >
                {Array.from(options.values()).map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Stack spacing={"4"}>
              {Object.entries(grouped).map(([month, { history, count }]) => {
                return (
                  <Stack key={month} spacing={"1"}>
                    <Text>
                      <Text fontSize={"lg"} fontWeight={"bold"} as={"span"}>
                        {month}月
                      </Text>
                      <Text fontSize={"lg"} fontWeight={"bold"} as={"span"}>
                        {count}回
                      </Text>
                    </Text>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th>日付</Th>
                          <Th>入</Th>
                          <Th>出</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {history
                          .toSorted((a, b) => a.day - b.day)
                          .map((h, i) => {
                            if (h.type !== "boarding") return null
                            return (
                              <Tr key={i}>
                                <Td>{h.day}日</Td>
                                <Td>{h.from}</Td>
                                <Td>{h.to}</Td>
                              </Tr>
                            )
                          })}
                      </Tbody>
                    </Table>
                  </Stack>
                )
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default ParseSFHistoryPage
