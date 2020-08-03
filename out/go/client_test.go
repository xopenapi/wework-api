package wework_test

import(
	"context"
	"testing"
	"io/ioutil"
	"log"
	"gopkg.in/yaml.v2"
	"github.com/xopenapi/wework-api-go"
)

type conf struct {
	CorpId 			string   	`yaml:"corpid"`
	CorpSecret  string 		`yaml:"corpsecret"`
}

func getConf() (*conf, error) {
	var conf conf
	yamlFile, err := ioutil.ReadFile("../../conf.yaml")
	if err != nil {
		log.Printf("yamlFile.Get err #%v ", err)
	}
	err = yaml.Unmarshal(yamlFile, &conf)
	if err != nil {
		return nil, err
	}
	return &conf, nil
}

func getClient() *wework.APIClient {
	cfg := wework.NewConfiguration()	
	client := wework.NewAPIClient(cfg)
	
	return client
}

func TestClient(t *testing.T) {
	client := getClient()
	
	conf, err := getConf()
	if err != nil {
		log.Fatalf("Unmarshal: %v", err)
		return
	}

	var accessToken string
	{	
		r, _, err := client.TokenApi.GetToken(context.Background(), conf.CorpId, conf.CorpSecret)
		if err != nil {
			log.Fatalf("err: %v", err)
			return	
		}

		if r.Errcode != 0 {
			log.Fatalf("err: %v\n", r)
			return
		}
		accessToken = r.AccessToken
		t.Log(r)
	}

	{
		sendMessageReq := wework.SendMessageReq{
			Toparty: "2",
			Msgtype: "text",
			Agentid: 1000003,
			Text: wework.TextMsg{
				Content: "测试一下",
			},
		}

		r, _, err := client.MessageApi.Send(context.Background(), accessToken, sendMessageReq)
		if err != nil {
			log.Fatalf("err: %v\n", err)
			return
		}

		if r.Errcode != 0 {
			log.Fatalf("errcode: %d, errmsg: %s\n", r.Errcode, r.Errmsg)
			return
		}
	}
} 